import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchOutboundConnectionArgsConnectionPropertiesCrossClusterSearch {
  skip_unavailable?: string;
}

export interface AwsOpensearchOutboundConnectionArgsConnectionProperties {
  cross_cluster_search?: AwsOpensearchOutboundConnectionArgsConnectionPropertiesCrossClusterSearch;
}

export interface AwsOpensearchOutboundConnectionArgsLocalDomainInfo {
  domain_name: string;
  owner_id: string;
  region: string;
}

export interface AwsOpensearchOutboundConnectionArgsRemoteDomainInfo {
  domain_name: string;
  owner_id: string;
  region: string;
}

export interface AwsOpensearchOutboundConnectionArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsOpensearchOutboundConnectionArgs {
  accept_connection?: boolean;
  connection_alias: string;
  connection_properties?: AwsOpensearchOutboundConnectionArgsConnectionProperties;
  local_domain_info: AwsOpensearchOutboundConnectionArgsLocalDomainInfo;
  remote_domain_info: AwsOpensearchOutboundConnectionArgsRemoteDomainInfo;
  timeouts?: AwsOpensearchOutboundConnectionArgsTimeouts;
}

export class aws_opensearch_outbound_connection extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpensearchOutboundConnectionArgs) {
    const meta = {connection_properties:{isBlock:true,cross_cluster_search:{isBlock:true}},local_domain_info:{isBlock:true},remote_domain_info:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearch_outbound_connection", resourceName);
  }

  get connection_alias(): string {
    return `${this.resourceType}.${this.resourceName}.connection_alias`;
  }

  get connection_mode(): string {
    return `${this.resourceType}.${this.resourceName}.connection_mode`;
  }

  get connection_status(): string {
    return `${this.resourceType}.${this.resourceName}.connection_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
