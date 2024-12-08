import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataAwsElasticacheUserArgsAuthenticationMode {
  password_count?: number;
  type?: string;
}

export interface DataAwsElasticacheUserArgs {
  access_string?: string;
  engine?: string;
  no_password_required?: boolean;
  passwords?: string[];
  user_id: string;
  user_name?: string;
  authentication_mode?: DataAwsElasticacheUserArgsAuthenticationMode[];
}

export class data_aws_elasticache_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataAwsElasticacheUserArgs) {
    const meta = {authentication_mode:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "aws_elasticache_user", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get user_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.user_id`;
  }
}
