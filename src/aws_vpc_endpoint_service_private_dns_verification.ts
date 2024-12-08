import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVpcEndpointServicePrivateDnsVerificationArgsTimeouts {
  create?: string;
}

export interface AwsVpcEndpointServicePrivateDnsVerificationArgs {
  service_id: string;
  wait_for_verification?: boolean;
  timeouts?: AwsVpcEndpointServicePrivateDnsVerificationArgsTimeouts;
}

export class aws_vpc_endpoint_service_private_dns_verification extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVpcEndpointServicePrivateDnsVerificationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_vpc_endpoint_service_private_dns_verification", resourceName);
  }

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }
}
