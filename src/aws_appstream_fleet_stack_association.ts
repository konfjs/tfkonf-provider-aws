import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsAppstreamFleetStackAssociationArgs {
  fleet_name: string;
  stack_name: string;
}

export class aws_appstream_fleet_stack_association extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsAppstreamFleetStackAssociationArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_appstream_fleet_stack_association", resourceName);
  }

  get fleet_name(): string {
    return `${this.resourceType}.${this.resourceName}.fleet_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get stack_name(): string {
    return `${this.resourceType}.${this.resourceName}.stack_name`;
  }
}
