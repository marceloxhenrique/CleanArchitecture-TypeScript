import crypto from "crypto";
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
  public readonly id: string;
  public props: Required<RouterProps>;
  constructor(props: RouterProps, id?: string) {
    (this.id = id || crypto.randomUUID()),
      (this.props = {
        ...props,
        points: props.points || [],
      });
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
    return {
      id: this.id,
      ...this.props,
    };
  }
}
