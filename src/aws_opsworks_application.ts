import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpsworksApplicationArgsAppSource {
  password?: string;
  revision?: string;
  ssh_key?: string;
  type: string;
  url?: string;
  username?: string;
}

export interface AwsOpsworksApplicationArgsEnvironment {
  key: string;
  secure?: boolean;
  value: string;
}

export interface AwsOpsworksApplicationArgsSslConfiguration {
  certificate: string;
  chain?: string;
  private_key: string;
}

export interface AwsOpsworksApplicationArgs {
  auto_bundle_on_deploy?: string;
  aws_flow_ruby_settings?: string;
  data_source_arn?: string;
  data_source_database_name?: string;
  data_source_type?: string;
  description?: string;
  document_root?: string;
  domains?: string[];
  enable_ssl?: boolean;
  name: string;
  rails_env?: string;
  stack_id: string;
  type: string;
  app_source?: AwsOpsworksApplicationArgsAppSource[];
  environment?: AwsOpsworksApplicationArgsEnvironment[];
  ssl_configuration?: AwsOpsworksApplicationArgsSslConfiguration[];
}

export class aws_opsworks_application extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsOpsworksApplicationArgs) {
    const meta = {app_source:{isBlock:true},environment:{isBlock:true},ssl_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opsworks_application", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get short_name(): string {
    return `${this.resourceType}.${this.resourceName}.short_name`;
  }

  get stack_id(): string {
    return `${this.resourceType}.${this.resourceName}.stack_id`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
