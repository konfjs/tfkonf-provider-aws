import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatasyncLocationHdfsArgsNameNode {
  hostname: string;
  port: number;
}

export interface AwsDatasyncLocationHdfsArgsQopConfiguration {
}

export interface AwsDatasyncLocationHdfsArgs {
  agent_arns: string[];
  authentication_type?: string;
  block_size?: number;
  kerberos_keytab?: string;
  kerberos_keytab_base64?: string;
  kerberos_krb5_conf?: string;
  kerberos_krb5_conf_base64?: string;
  kerberos_principal?: string;
  kms_key_provider_uri?: string;
  replication_factor?: number;
  simple_user?: string;
  subdirectory?: string;
  tags?: { [key: string]: string };
  name_node: AwsDatasyncLocationHdfsArgsNameNode[];
  qop_configuration?: AwsDatasyncLocationHdfsArgsQopConfiguration;
}

export class aws_datasync_location_hdfs extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsDatasyncLocationHdfsArgs) {
    const meta = {name_node:{isBlock:true},qop_configuration:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_datasync_location_hdfs", resourceName);
  }

  get agent_arns(): string {
    return `${this.resourceType}.${this.resourceName}.agent_arns`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get uri(): string {
    return `${this.resourceType}.${this.resourceName}.uri`;
  }
}
