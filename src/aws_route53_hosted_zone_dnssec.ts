import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsRoute53HostedZoneDnssecArgs {
  hosted_zone_id: string;
  signing_status?: string;
}

export class aws_route53_hosted_zone_dnssec extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsRoute53HostedZoneDnssecArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "aws_route53_hosted_zone_dnssec", resourceName);
  }

  get hosted_zone_id(): string {
    return `${this.resourceType}.${this.resourceName}.hosted_zone_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }
}
