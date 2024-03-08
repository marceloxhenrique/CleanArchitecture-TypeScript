import { title } from "process";
import { LatLng, Route, RouterProps } from "../domain/route.entity";
import { RouteInMemoryRepository } from "./route-in-memory.repository";

describe("RouteInMemoryRepository", () => {
  it("insert a new route", async () => {
    const repository = new RouteInMemoryRepository();

    let routeProps: RouterProps = {
      title: "Insert Test",
      startPosition: { lat: 12, lng: 13 },
      endPosition: { lat: 14, lng: 15 },
      // position: [{ lat: 20, lng: 30 }],
    };

    const route = new Route(routeProps);

    await repository.insert(route);
    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
