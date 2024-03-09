import { RouteInMemoryRepository } from "../infra/db/route-in-memory.repository";
import { CreateRouteUseCase } from "./create-route.use-case";

describe("CreateRouteUseCase Tests", () => {
  it("Should create an new route", async () => {
    const repository = new RouteInMemoryRepository();
    const createRoute = new CreateRouteUseCase(repository);
    const propsRoute = {
      title: "My route",
      startPosition: { lat: 12, lng: 34 },
      endPosition: { lat: 56, lng: 78 },
    };
    const output = await createRoute.execute(propsRoute);
    expect(repository.items).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: "My route",
      startPosition: { lat: 12, lng: 34 },
      endPosition: { lat: 56, lng: 78 },
      points: [],
    });
  });
});
