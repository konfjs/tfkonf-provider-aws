import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKmsPublicKeyArgs {
  grant_tokens?: string[];
  key_id: string;
}

export class data_aws_kms_public_key extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsKmsPublicKeyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kms_public_key", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get customer_master_key_spec(): string {
    return `data.${this.resourceType}.${this.resourceName}.customer_master_key_spec`;
  }

  get encryption_algorithms(): string {
    return `data.${this.resourceType}.${this.resourceName}.encryption_algorithms`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_id`;
  }

  get key_usage(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_usage`;
  }

  get public_key(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_key`;
  }

  get public_key_pem(): string {
    return `data.${this.resourceType}.${this.resourceName}.public_key_pem`;
  }

  get signing_algorithms(): string {
    return `data.${this.resourceType}.${this.resourceName}.signing_algorithms`;
  }
}
