import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKeyPairArgsFilter {
  name: string;
  values: string[];
}

export interface DataAwsKeyPairArgsTimeouts {
  read?: string;
}

export interface DataAwsKeyPairArgs {
  include_public_key?: boolean;
  key_name?: string;
  key_pair_id?: string;
  filter?: DataAwsKeyPairArgsFilter[];
  timeouts?: DataAwsKeyPairArgsTimeouts;
}

export class data_aws_key_pair extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKeyPairArgs) {
    const meta = {filter:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_key_pair", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get fingerprint(): string {
    return `data.${this.resourceType}.${this.resourceName}.fingerprint`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_type(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_type`;
  }

  get public_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_key`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }
}
