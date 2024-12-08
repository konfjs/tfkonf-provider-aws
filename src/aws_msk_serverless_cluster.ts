import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsMskServerlessClusterArgsClientAuthenticationSaslIam {
  enabled: boolean;
}

export interface AwsMskServerlessClusterArgsClientAuthenticationSasl {
  iam: AwsMskServerlessClusterArgsClientAuthenticationSaslIam;
}

export interface AwsMskServerlessClusterArgsClientAuthentication {
  sasl: AwsMskServerlessClusterArgsClientAuthenticationSasl;
}

export interface AwsMskServerlessClusterArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsMskServerlessClusterArgsVpcConfig {
  subnet_ids: string[];
}

export interface AwsMskServerlessClusterArgs {
  cluster_name: string;
  tags?: { [key: string]: string };
  client_authentication: AwsMskServerlessClusterArgsClientAuthentication;
  timeouts?: AwsMskServerlessClusterArgsTimeouts;
  vpc_config: AwsMskServerlessClusterArgsVpcConfig[];
}

export class aws_msk_serverless_cluster extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsMskServerlessClusterArgs) {
    const meta = {client_authentication:{isBlock:true,sasl:{isBlock:true,iam:{isBlock:true}}},timeouts:{isBlock:true},vpc_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_msk_serverless_cluster", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get cluster_name(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_name`;
  }

  get cluster_uuid(): string {
    return `${this.resourceType}.${this.resourceName}.cluster_uuid`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
