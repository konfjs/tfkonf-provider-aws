import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsCiphertextArgs {
  context?: { [key: string]: string };
  key_id: string;
  plaintext: string;
}

export class aws_kms_ciphertext extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKmsCiphertextArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_kms_ciphertext", resourceName);
  }

  get ciphertext_blob(): string {
    return `${this.resourceType}.${this.resourceName}.ciphertext_blob`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get plaintext(): string {
    return `${this.resourceType}.${this.resourceName}.plaintext`;
  }
}
