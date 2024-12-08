import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamServerCertificateArgsTimeouts {
  delete?: string;
}

export interface AwsIamServerCertificateArgs {
  certificate_body: string;
  certificate_chain?: string;
  path?: string;
  private_key: string;
  tags?: { [key: string]: string };
  timeouts?: AwsIamServerCertificateArgsTimeouts;
}

export class aws_iam_server_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamServerCertificateArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_iam_server_certificate", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get certificate_body(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_body`;
  }

  get expiration(): string {
    return `${this.resourceType}.${this.resourceName}.expiration`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get private_key(): string {
    return `${this.resourceType}.${this.resourceName}.private_key`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get upload_date(): string {
    return `${this.resourceType}.${this.resourceName}.upload_date`;
  }
}
