import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsLbTrustStoreArgs {
}

export class data_aws_lb_trust_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsLbTrustStoreArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_lb_trust_store", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
