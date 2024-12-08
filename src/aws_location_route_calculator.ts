import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLocationRouteCalculatorArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsLocationRouteCalculatorArgs {
  calculator_name: string;
  data_source: string;
  description?: string;
  tags?: { [key: string]: string };
  timeouts?: AwsLocationRouteCalculatorArgsTimeouts;
}

export class aws_location_route_calculator extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLocationRouteCalculatorArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_location_route_calculator", resourceName);
  }

  get calculator_arn(): string {
    return `${this.resourceType}.${this.resourceName}.calculator_arn`;
  }

  get calculator_name(): string {
    return `${this.resourceType}.${this.resourceName}.calculator_name`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get data_source(): string {
    return `${this.resourceType}.${this.resourceName}.data_source`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
