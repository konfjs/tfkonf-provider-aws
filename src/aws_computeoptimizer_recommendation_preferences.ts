import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsComputeoptimizerRecommendationPreferencesArgsExternalMetricsPreference {
  source: string;
}

export interface AwsComputeoptimizerRecommendationPreferencesArgsPreferredResource {
  exclude_list?: string[];
  include_list?: string[];
  name: string;
}

export interface AwsComputeoptimizerRecommendationPreferencesArgsScope {
  name: string;
  value: string;
}

export interface AwsComputeoptimizerRecommendationPreferencesArgsUtilizationPreferenceMetricParameters {
  headroom: string;
  threshold?: string;
}

export interface AwsComputeoptimizerRecommendationPreferencesArgsUtilizationPreference {
  metric_name: string;
  metric_parameters?: AwsComputeoptimizerRecommendationPreferencesArgsUtilizationPreferenceMetricParameters[];
}

export interface AwsComputeoptimizerRecommendationPreferencesArgs {
  enhanced_infrastructure_metrics?: string;
  inferred_workload_types?: string;
  resource_type: string;
  savings_estimation_mode?: string;
  external_metrics_preference?: AwsComputeoptimizerRecommendationPreferencesArgsExternalMetricsPreference[];
  preferred_resource?: AwsComputeoptimizerRecommendationPreferencesArgsPreferredResource[];
  scope?: AwsComputeoptimizerRecommendationPreferencesArgsScope[];
  utilization_preference?: AwsComputeoptimizerRecommendationPreferencesArgsUtilizationPreference[];
}

export class aws_computeoptimizer_recommendation_preferences extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsComputeoptimizerRecommendationPreferencesArgs) {
    const meta = {external_metrics_preference:{isBlock:true},preferred_resource:{isBlock:true},scope:{isBlock:true},utilization_preference:{isBlock:true,metric_parameters:{isBlock:true}}};
    super(terraformConfig, "resource", args, meta, "aws_computeoptimizer_recommendation_preferences", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get look_back_period(): string {
    return `${this.resourceType}.${this.resourceName}.look_back_period`;
  }

  get resource_type(): string {
    return `${this.resourceType}.${this.resourceName}.resource_type`;
  }
}
