type LatLng = {
  lat: number;
  lng: number;
};

type RouterProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points: LatLng[];
};

class Route {
  constructor(private props: RouterProps) {}

  public set title(value: string) {
    this.props.title = value;
  }
}

const route: Route = new Route({
  title: "My route",
  startPosition: { lat: 12, lng: 34 },
  endPosition: { lat: 56, lng: 78 },
  points: [
    { lat: 12, lng: 34 },
    { lat: 56, lng: 78 },
  ],
});
