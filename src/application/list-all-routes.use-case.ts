import { LatLng } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

export class ListeAllRoutes {
  constructor(private routeRepo: RouteRepositoryInterface) {}
  async execute(): Promise<CreateRouteOutput> {
    const route = await this.routeRepo.findAll();
    return route.map((r) => r.toJSON());
  }
}

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
}[];
