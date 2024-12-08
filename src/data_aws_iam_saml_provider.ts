import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamSamlProviderArgs {
  arn: string;
}

export class data_aws_iam_saml_provider extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamSamlProviderArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_saml_provider", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get create_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get saml_metadata_document(): string {
    return `data.${this.resourceType}.${this.resourceName}.saml_metadata_document`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get valid_until(): string {
    return `data.${this.resourceType}.${this.resourceName}.valid_until`;
  }
}
