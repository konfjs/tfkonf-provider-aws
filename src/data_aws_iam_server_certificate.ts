import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamServerCertificateArgs {
  latest?: boolean;
  name_prefix?: string;
  path_prefix?: string;
}

export class data_aws_iam_server_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsIamServerCertificateArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_server_certificate", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_body(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_body`;
  }

  get certificate_chain(): string {
    return `data.${this.resourceType}.${this.resourceName}.certificate_chain`;
  }

  get expiration_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.expiration_date`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get path(): string {
    return `data.${this.resourceType}.${this.resourceName}.path`;
  }

  get upload_date(): string {
    return `data.${this.resourceType}.${this.resourceName}.upload_date`;
  }
}
