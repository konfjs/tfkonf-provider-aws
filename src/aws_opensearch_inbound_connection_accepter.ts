import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsOpensearchInboundConnectionAccepterArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface AwsOpensearchInboundConnectionAccepterArgs {
  connection_id: string;
  timeouts?: AwsOpensearchInboundConnectionAccepterArgsTimeouts;
}

export class aws_opensearch_inbound_connection_accepter extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsOpensearchInboundConnectionAccepterArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_opensearch_inbound_connection_accepter", resourceName);
  }

  get connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.connection_id`;
  }

  get connection_status(): string {
    return `${this.resourceType}.${this.resourceName}.connection_status`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
