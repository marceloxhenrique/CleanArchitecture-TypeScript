export type LatLng = {
  lat: number;
  lng: number;
};

export type RouterProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: LatLng[];
};

export class Route {
  public props: Required<RouterProps>;
  constructor(props: RouterProps) {
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  updateTitle(title: string) {
    // All business logic should be here not in the Framework.
    // Update to upperCase
    // Validate characters
    // Specific validations
    this.title = title;
  }

  updatePositions(startPosition: LatLng, endPosition: LatLng) {
    // All business logic should be here not in the Framework.
    // Update to upperCase
    // Validate characters
    // Specific validations
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  updatePoints(value: LatLng[]) {
    // All business logic should be here not in the Framework.
    // Update to upperCase
    // Validate characters
    // Specific validations
    this.points = value;
  }

  public get title(): string {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  public get startPosition(): LatLng {
    return this.props.startPosition;
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }
  public get endPosition(): LatLng {
    return this.props.endPosition;
  }

  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }
  public get points(): LatLng[] {
    return this.props.points;
  }

  private set points(value: LatLng[]) {
    this.props.points = value;
  }

  toJSON() {
    return this.props;
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
