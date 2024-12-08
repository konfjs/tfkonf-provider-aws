import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsIamOpenidConnectProviderArgs {
  client_id_list: string[];
  tags?: { [key: string]: string };
  thumbprint_list: string[];
  url: string;
}

export class aws_iam_openid_connect_provider extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsIamOpenidConnectProviderArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_iam_openid_connect_provider", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get client_id_list(): string {
    return `${this.resourceType}.${this.resourceName}.client_id_list`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get thumbprint_list(): string {
    return `${this.resourceType}.${this.resourceName}.thumbprint_list`;
  }

  get url(): string {
    return `${this.resourceType}.${this.resourceName}.url`;
  }
}
