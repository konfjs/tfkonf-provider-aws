import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKeyPairArgs {
  public_key: string;
  tags?: { [key: string]: string };
}

export class aws_key_pair extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKeyPairArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_key_pair", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_name(): string {
    return `${this.resourceType}.${this.resourceName}.key_name`;
  }

  get key_name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.key_name_prefix`;
  }

  get key_pair_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_pair_id`;
  }

  get key_type(): string {
    return `${this.resourceType}.${this.resourceName}.key_type`;
  }

  get public_key(): string {
    return `${this.resourceType}.${this.resourceName}.public_key`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
