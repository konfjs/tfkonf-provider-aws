import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSesv2DedicatedIpAssignmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsSesv2DedicatedIpAssignmentArgs {
  destination_pool_name: string;
  ip: string;
  timeouts?: AwsSesv2DedicatedIpAssignmentArgsTimeouts;
}

export class aws_sesv2_dedicated_ip_assignment extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSesv2DedicatedIpAssignmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sesv2_dedicated_ip_assignment", resourceName);
  }

  get destination_pool_name(): string {
    return `${this.resourceType}.${this.resourceName}.destination_pool_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ip(): string {
    return `${this.resourceType}.${this.resourceName}.ip`;
  }
}
