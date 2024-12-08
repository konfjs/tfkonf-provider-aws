import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsEc2InstanceMetadataDefaultsArgs {
}

export class aws_ec2_instance_metadata_defaults extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsEc2InstanceMetadataDefaultsArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_ec2_instance_metadata_defaults", resourceName);
  }

  get http_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.http_endpoint`;
  }

  get http_put_response_hop_limit(): string {
    return `${this.resourceType}.${this.resourceName}.http_put_response_hop_limit`;
  }

  get http_tokens(): string {
    return `${this.resourceType}.${this.resourceName}.http_tokens`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_metadata_tags(): string {
    return `${this.resourceType}.${this.resourceName}.instance_metadata_tags`;
  }
}
