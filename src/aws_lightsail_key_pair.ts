import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsLightsailKeyPairArgs {
  pgp_key?: string;
  tags?: { [key: string]: string };
}

export class aws_lightsail_key_pair extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsLightsailKeyPairArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_lightsail_key_pair", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get encrypted_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted_fingerprint`;
  }

  get encrypted_private_key(): string {
    return `${this.resourceType}.${this.resourceName}.encrypted_private_key`;
  }

  get fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get private_key(): string {
    return `${this.resourceType}.${this.resourceName}.private_key`;
  }

  get public_key(): string {
    return `${this.resourceType}.${this.resourceName}.public_key`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
