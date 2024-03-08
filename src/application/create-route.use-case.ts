import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class CreateRouteUseCase {
  constructor(private routeRepo: RouteRepositoryInterface) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepo.insert(route);
    return route.toJSON();

    // I could declare that type CreateRouteOutput = Route, but I should not return the entity Route here because the controller/interfaces Adapters that will use this use case would know my entity Route, so I create a method (toJson()) to return the pure data to remove this dependency between layers.
  }
}
// Single Responsibilty principle -> SOLID

type CreateRouteInput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};
type CreateRouteOutput = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};
