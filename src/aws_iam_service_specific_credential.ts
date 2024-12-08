import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamServiceSpecificCredentialArgs {
  service_name: string;
  status?: string;
  user_name: string;
}

export class aws_iam_service_specific_credential extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamServiceSpecificCredentialArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_service_specific_credential", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }

  get service_password(): string {
    return `${this.resourceType}.${this.resourceName}.service_password`;
  }

  get service_specific_credential_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_specific_credential_id`;
  }

  get service_user_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_user_name`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
