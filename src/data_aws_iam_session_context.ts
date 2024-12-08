import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsIamSessionContextArgs {
  arn: string;
}

export class data_aws_iam_session_context extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsIamSessionContextArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "aws_iam_session_context", resourceName);
  }

  get arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get issuer_arn(): string {
    return `data.${this.resourceType}.${this.resourceName}.issuer_arn`;
  }

  get issuer_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.issuer_id`;
  }

  get issuer_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.issuer_name`;
  }

  get session_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.session_name`;
  }
}
