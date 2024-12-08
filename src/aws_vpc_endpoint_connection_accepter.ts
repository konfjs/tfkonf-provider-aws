import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointConnectionAccepterArgs {
  vpc_endpoint_id: string;
  vpc_endpoint_service_id: string;
}

export class aws_vpc_endpoint_connection_accepter extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsVpcEndpointConnectionAccepterArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_connection_accepter", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get vpc_endpoint_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint_id`;
  }

  get vpc_endpoint_service_id(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint_service_id`;
  }

  get vpc_endpoint_state(): string {
    return `${this.resourceType}.${this.resourceName}.vpc_endpoint_state`;
  }
}
