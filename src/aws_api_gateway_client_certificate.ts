import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsApiGatewayClientCertificateArgs {
  description?: string;
  tags?: { [key: string]: string };
}

export class aws_api_gateway_client_certificate extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsApiGatewayClientCertificateArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_api_gateway_client_certificate", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get created_date(): string {
    return `${this.resourceType}.${this.resourceName}.created_date`;
  }

  get expiration_date(): string {
    return `${this.resourceType}.${this.resourceName}.expiration_date`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get pem_encoded_certificate(): string {
    return `${this.resourceType}.${this.resourceName}.pem_encoded_certificate`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
