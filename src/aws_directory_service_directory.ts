import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDirectoryServiceDirectoryArgsConnectSettings {
  customer_dns_ips: string[];
  customer_username: string;
  subnet_ids: string[];
  vpc_id: string;
}

export interface AwsDirectoryServiceDirectoryArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsDirectoryServiceDirectoryArgsVpcSettings {
  subnet_ids: string[];
  vpc_id: string;
}

export interface AwsDirectoryServiceDirectoryArgs {
  description?: string;
  enable_sso?: boolean;
  name: string;
  password: string;
  tags?: { [key: string]: string };
  type?: string;
  connect_settings?: AwsDirectoryServiceDirectoryArgsConnectSettings;
  timeouts?: AwsDirectoryServiceDirectoryArgsTimeouts;
  vpc_settings?: AwsDirectoryServiceDirectoryArgsVpcSettings;
}

export class aws_directory_service_directory extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDirectoryServiceDirectoryArgs) {
    const meta = {connect_settings:{isBlock:true},timeouts:{isBlock:true},vpc_settings:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_directory_service_directory", resourceName);
  }

  get access_url(): string {
    return `${this.resourceType}.${this.resourceName}.access_url`;
  }

  get alias(): string {
    return `${this.resourceType}.${this.resourceName}.alias`;
  }

  get desired_number_of_domain_controllers(): string {
    return `${this.resourceType}.${this.resourceName}.desired_number_of_domain_controllers`;
  }

  get dns_ip_addresses(): string {
    return `${this.resourceType}.${this.resourceName}.dns_ip_addresses`;
  }

  get edition(): string {
    return `${this.resourceType}.${this.resourceName}.edition`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get password(): string {
    return `${this.resourceType}.${this.resourceName}.password`;
  }

  get security_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.security_group_id`;
  }

  get short_name(): string {
    return `${this.resourceType}.${this.resourceName}.short_name`;
  }

  get size(): string {
    return `${this.resourceType}.${this.resourceName}.size`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
