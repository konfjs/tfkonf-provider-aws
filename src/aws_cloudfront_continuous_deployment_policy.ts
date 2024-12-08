import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsCloudfrontContinuousDeploymentPolicyArgsStagingDistributionDnsNames {
  items?: string[];
  quantity: number;
}

export interface AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleHeaderConfig {
  header: string;
  value: string;
}

export interface AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleWeightConfigSessionStickinessConfig {
  idle_ttl: number;
  maximum_ttl: number;
}

export interface AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleWeightConfig {
  weight: number;
  session_stickiness_config?: AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleWeightConfigSessionStickinessConfig[];
}

export interface AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfig {
  type: string;
  single_header_config?: AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleHeaderConfig[];
  single_weight_config?: AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfigSingleWeightConfig[];
}

export interface AwsCloudfrontContinuousDeploymentPolicyArgs {
  enabled: boolean;
  staging_distribution_dns_names?: AwsCloudfrontContinuousDeploymentPolicyArgsStagingDistributionDnsNames[];
  traffic_config?: AwsCloudfrontContinuousDeploymentPolicyArgsTrafficConfig[];
}

export class aws_cloudfront_continuous_deployment_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsCloudfrontContinuousDeploymentPolicyArgs) {
    const meta = {staging_distribution_dns_names:{isBlock:true},traffic_config:{isBlock:true,single_header_config:{isBlock:true},single_weight_config:{isBlock:true,session_stickiness_config:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_cloudfront_continuous_deployment_policy", resourceName);
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modified_time(): string {
    return `${this.resourceType}.${this.resourceName}.last_modified_time`;
  }
}
