import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsVerifiedaccessEndpointArgsLoadBalancerOptions {
  load_balancer_arn?: string;
  port?: number;
  protocol?: string;
  subnet_ids?: string[];
}

export interface AwsVerifiedaccessEndpointArgsNetworkInterfaceOptions {
  network_interface_id?: string;
  port?: number;
  protocol?: string;
}

export interface AwsVerifiedaccessEndpointArgsSseSpecification {
  customer_managed_key_enabled?: boolean;
  kms_key_arn?: string;
}

export interface AwsVerifiedaccessEndpointArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsVerifiedaccessEndpointArgs {
  application_domain: string;
  attachment_type: string;
  description?: string;
  domain_certificate_arn: string;
  endpoint_domain_prefix: string;
  endpoint_type: string;
  policy_document?: string;
  security_group_ids?: string[];
  tags?: { [key: string]: string };
  verified_access_group_id: string;
  load_balancer_options?: AwsVerifiedaccessEndpointArgsLoadBalancerOptions;
  network_interface_options?: AwsVerifiedaccessEndpointArgsNetworkInterfaceOptions;
  sse_specification?: AwsVerifiedaccessEndpointArgsSseSpecification;
  timeouts?: AwsVerifiedaccessEndpointArgsTimeouts;
}

export class aws_verifiedaccess_endpoint extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsVerifiedaccessEndpointArgs) {
    const meta = {load_balancer_options:{isBlock:true},network_interface_options:{isBlock:true},sse_specification:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_verifiedaccess_endpoint", resourceName);
  }

  get application_domain(): string {
    return `${this.resourceType}.${this.resourceName}.application_domain`;
  }

  get attachment_type(): string {
    return `${this.resourceType}.${this.resourceName}.attachment_type`;
  }

  get device_validation_domain(): string {
    return `${this.resourceType}.${this.resourceName}.device_validation_domain`;
  }

  get domain_certificate_arn(): string {
    return `${this.resourceType}.${this.resourceName}.domain_certificate_arn`;
  }

  get endpoint_domain(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_domain`;
  }

  get endpoint_domain_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_domain_prefix`;
  }

  get endpoint_type(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_type`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get verified_access_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.verified_access_group_id`;
  }

  get verified_access_instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.verified_access_instance_id`;
  }
}
