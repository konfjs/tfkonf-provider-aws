import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsInspector2EnablerArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsInspector2EnablerArgs {
  account_ids: string[];
  resource_types: string[];
  timeouts?: AwsInspector2EnablerArgsTimeouts;
}

export class aws_inspector2_enabler extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsInspector2EnablerArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_inspector2_enabler", resourceName);
  }

  get account_ids(): string {
    return `${this.resourceType}.${this.resourceName}.account_ids`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource_types(): string {
    return `${this.resourceType}.${this.resourceName}.resource_types`;
  }
}
