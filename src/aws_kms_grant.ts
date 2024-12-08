import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsKmsGrantArgsConstraints {
  encryption_context_equals?: { [key: string]: string };
  encryption_context_subset?: { [key: string]: string };
}

export interface AwsKmsGrantArgs {
  grant_creation_tokens?: string[];
  grantee_principal: string;
  key_id: string;
  name?: string;
  operations: string[];
  retire_on_delete?: boolean;
  retiring_principal?: string;
  constraints?: AwsKmsGrantArgsConstraints[];
}

export class aws_kms_grant extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsKmsGrantArgs) {
    const meta = {constraints:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_kms_grant", resourceName);
  }

  get grant_id(): string {
    return `${this.resourceType}.${this.resourceName}.grant_id`;
  }

  get grant_token(): string {
    return `${this.resourceType}.${this.resourceName}.grant_token`;
  }

  get grantee_principal(): string {
    return `${this.resourceType}.${this.resourceName}.grantee_principal`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get operations(): string {
    return `${this.resourceType}.${this.resourceName}.operations`;
  }
}
