import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsCognitoUserPoolSigningCertificateArgs {
  user_pool_id: string;
}

export class data_aws_cognito_user_pool_signing_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsCognitoUserPoolSigningCertificateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_cognito_user_pool_signing_certificate", resourceName);
  }

  get certificate(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get user_pool_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_pool_id`;
  }
}
