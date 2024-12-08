import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamSamlProviderArgs {
  name: string;
  saml_metadata_document: string;
  tags?: { [key: string]: string };
}

export class aws_iam_saml_provider extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsIamSamlProviderArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_saml_provider", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get saml_metadata_document(): string {
    return `${this.resourceType}.${this.resourceName}.saml_metadata_document`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get valid_until(): string {
    return `${this.resourceType}.${this.resourceName}.valid_until`;
  }
}
