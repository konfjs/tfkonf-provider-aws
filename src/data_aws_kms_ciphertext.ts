import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsKmsCiphertextArgs {
  context?: { [key: string]: string };
  key_id: string;
  plaintext: string;
}

export class data_aws_kms_ciphertext extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsKmsCiphertextArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_kms_ciphertext", resourceName);
  }

  get ciphertext_blob(): string {
    return `data.${this.resourceType}.${this.resourceName}.ciphertext_blob`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.key_id`;
  }

  get plaintext(): string {
    return `data.${this.resourceType}.${this.resourceName}.plaintext`;
  }
}
