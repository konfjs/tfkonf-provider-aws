import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsResiliencehubResiliencyPolicyArgsPolicyAz {
  rpo: string;
  rto: string;
}

export interface AwsResiliencehubResiliencyPolicyArgsPolicyHardware {
  rpo: string;
  rto: string;
}

export interface AwsResiliencehubResiliencyPolicyArgsPolicyRegion {
  rpo?: string;
  rto?: string;
}

export interface AwsResiliencehubResiliencyPolicyArgsPolicySoftware {
  rpo: string;
  rto: string;
}

export interface AwsResiliencehubResiliencyPolicyArgsPolicy {
  az?: AwsResiliencehubResiliencyPolicyArgsPolicyAz;
  hardware?: AwsResiliencehubResiliencyPolicyArgsPolicyHardware;
  region?: AwsResiliencehubResiliencyPolicyArgsPolicyRegion;
  software?: AwsResiliencehubResiliencyPolicyArgsPolicySoftware;
}

export interface AwsResiliencehubResiliencyPolicyArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsResiliencehubResiliencyPolicyArgs {
  description?: string;
  name: string;
  tags?: { [key: string]: string };
  tier: string;
  policy?: AwsResiliencehubResiliencyPolicyArgsPolicy;
  timeouts?: AwsResiliencehubResiliencyPolicyArgsTimeouts;
}

export class aws_resiliencehub_resiliency_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsResiliencehubResiliencyPolicyArgs) {
    const meta = {policy:{isBlock:true,az:{isBlock:true},hardware:{isBlock:true},region:{isBlock:true},software:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_resiliencehub_resiliency_policy", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get data_location_constraint(): string {
    return `${this.resourceType}.${this.resourceName}.data_location_constraint`;
  }

  get estimated_cost_tier(): string {
    return `${this.resourceType}.${this.resourceName}.estimated_cost_tier`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get tier(): string {
    return `${this.resourceType}.${this.resourceName}.tier`;
  }
}
