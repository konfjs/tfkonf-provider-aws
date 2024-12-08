import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLocationRouteCalculatorArgs {
  calculator_name: string;
}

export class data_aws_location_route_calculator extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLocationRouteCalculatorArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_location_route_calculator", resourceName);
  }

  get calculator_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.calculator_arn`;
  }

  get calculator_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.calculator_name`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get data_source(): string {
    return `data.${this.resourceType}.${this.resourceName}.data_source`;
  }

  get description(): string {
    return `data.${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get update_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.update_time`;
  }
}
