import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53KeySigningKeyArgs {
  hosted_zone_id: string;
  key_management_service_arn: string;
  name: string;
  status?: string;
}

export class aws_route53_key_signing_key extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53KeySigningKeyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_key_signing_key", resourceName);
  }

  get digest_algorithm_mnemonic(): string {
    return `${this.resourceType}.${this.resourceName}.digest_algorithm_mnemonic`;
  }

  get digest_algorithm_type(): string {
    return `${this.resourceType}.${this.resourceName}.digest_algorithm_type`;
  }

  get digest_value(): string {
    return `${this.resourceType}.${this.resourceName}.digest_value`;
  }

  get dnskey_record(): string {
    return `${this.resourceType}.${this.resourceName}.dnskey_record`;
  }

  get ds_record(): string {
    return `${this.resourceType}.${this.resourceName}.ds_record`;
  }

  get flag(): string {
    return `${this.resourceType}.${this.resourceName}.flag`;
  }

  get hosted_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_management_service_arn(): string {
    return `${this.resourceType}.${this.resourceName}.key_management_service_arn`;
  }

  get key_tag(): string {
    return `${this.resourceType}.${this.resourceName}.key_tag`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get public_key(): string {
    return `${this.resourceType}.${this.resourceName}.public_key`;
  }

  get signing_algorithm_mnemonic(): string {
    return `${this.resourceType}.${this.resourceName}.signing_algorithm_mnemonic`;
  }

  get signing_algorithm_type(): string {
    return `${this.resourceType}.${this.resourceName}.signing_algorithm_type`;
  }
}
