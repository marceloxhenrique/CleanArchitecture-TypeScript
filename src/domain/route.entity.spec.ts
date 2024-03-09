import { LatLng, Route, RouterProps } from "./route.entity";

describe("Route Tests", () => {
  test("Constructor", () => {
    let routeProps: RouterProps = {
      title: "My Route",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
    };
    let route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps = {
      title: "My Route",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 20, lng: 30 }],
    };
    route = new Route(routeProps);
    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 20, lng: 30 }],
    });

    route.updateTitle("My test");
    expect(route.props.title).toBe("My test");
  });

  test("Should update route title", () => {
    const route: Route = new Route({
      title: "My Route",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 20, lng: 30 }],
    });
    route.updateTitle("My test");
    expect(route.title).toBe("My test");
  });

  test("Should update the route startPosition and endPosition", () => {
    const route: Route = new Route({
      title: "My Route",
      startPosition: { lat: 0, lng: 1 },
      endPosition: { lat: 2, lng: 3 },
      points: [{ lat: 20, lng: 30 }],
    });
    const startPosition: LatLng = { lat: 10, lng: 20 };
    const endPosition: LatLng = { lat: 30, lng: 40 };
    route.updatePositions(startPosition, endPosition);
    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
    // expect(route.title).toBe("My test");
  });

  test("Should update the route points", () => {
    const route = new Route({
      title: "My Route",
      startPosition: { lat: 20, lng: 30 },
      endPosition: { lat: 40, lng: 50 },
      points: [{ lat: 60, lng: 70 }],
    });

    const newPoints: LatLng[] = [{ lat: 10, lng: 22 }];
    route.updatePoints(newPoints);
    expect(route.points).toHaveLength(1);
    expect(route.points).toStrictEqual(newPoints);
  });
});
