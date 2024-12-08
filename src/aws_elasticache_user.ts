import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsElasticacheUserArgsAuthenticationMode {
  passwords?: string[];
  type: string;
}

export interface AwsElasticacheUserArgsTimeouts {
  create?: string;
  delete?: string;
  read?: string;
  update?: string;
}

export interface AwsElasticacheUserArgs {
  access_string: string;
  engine: string;
  no_password_required?: boolean;
  passwords?: string[];
  tags?: { [key: string]: string };
  user_id: string;
  user_name: string;
  authentication_mode?: AwsElasticacheUserArgsAuthenticationMode;
  timeouts?: AwsElasticacheUserArgsTimeouts;
}

export class aws_elasticache_user extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsElasticacheUserArgs) {
    const meta = {authentication_mode:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_elasticache_user", resourceName);
  }

  get access_string(): string {
    return `${this.resourceType}.${this.resourceName}.access_string`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get engine(): string {
    return `${this.resourceType}.${this.resourceName}.engine`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get user_id(): string {
    return `${this.resourceType}.${this.resourceName}.user_id`;
  }

  get user_name(): string {
    return `${this.resourceType}.${this.resourceName}.user_name`;
  }
}
