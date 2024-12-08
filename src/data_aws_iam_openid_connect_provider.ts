import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamOpenidConnectProviderArgs {
}

export class data_aws_iam_openid_connect_provider extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataAwsIamOpenidConnectProviderArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_openid_connect_provider", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get client_id_list(): string {
    return `data.${this.resourceType}.${this.resourceName}.client_id_list`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get tags(): string {
    return `data.${this.resourceType}.${this.resourceName}.tags`;
  }

  get thumbprint_list(): string {
    return `data.${this.resourceType}.${this.resourceName}.thumbprint_list`;
  }

  get url(): string {
    return `data.${this.resourceType}.${this.resourceName}.url`;
  }
}
