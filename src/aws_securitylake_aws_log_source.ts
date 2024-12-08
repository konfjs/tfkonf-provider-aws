import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSecuritylakeAwsLogSourceArgsSource {
  regions: string[];
  source_name: string;
}

export interface AwsSecuritylakeAwsLogSourceArgs {
  source?: AwsSecuritylakeAwsLogSourceArgsSource[];
}

export class aws_securitylake_aws_log_source extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsSecuritylakeAwsLogSourceArgs) {
    const meta = {source:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_securitylake_aws_log_source", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
