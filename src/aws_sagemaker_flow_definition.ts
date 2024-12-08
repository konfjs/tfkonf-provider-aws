import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerFlowDefinitionArgsHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
  human_loop_activation_conditions: string;
}

export interface AwsSagemakerFlowDefinitionArgsHumanLoopActivationConfig {
  human_loop_activation_conditions_config?: AwsSagemakerFlowDefinitionArgsHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
}

export interface AwsSagemakerFlowDefinitionArgsHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
  cents?: number;
  dollars?: number;
  tenth_fractions_of_a_cent?: number;
}

export interface AwsSagemakerFlowDefinitionArgsHumanLoopConfigPublicWorkforceTaskPrice {
  amount_in_usd?: AwsSagemakerFlowDefinitionArgsHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
}

export interface AwsSagemakerFlowDefinitionArgsHumanLoopConfig {
  human_task_ui_arn: string;
  task_availability_lifetime_in_seconds?: number;
  task_count: number;
  task_description: string;
  task_keywords?: string[];
  task_time_limit_in_seconds?: number;
  task_title: string;
  workteam_arn: string;
  public_workforce_task_price?: AwsSagemakerFlowDefinitionArgsHumanLoopConfigPublicWorkforceTaskPrice;
}

export interface AwsSagemakerFlowDefinitionArgsHumanLoopRequestSource {
  aws_managed_human_loop_request_source: string;
}

export interface AwsSagemakerFlowDefinitionArgsOutputConfig {
  kms_key_id?: string;
  s3_output_path: string;
}

export interface AwsSagemakerFlowDefinitionArgs {
  flow_definition_name: string;
  role_arn: string;
  tags?: { [key: string]: string };
  human_loop_activation_config?: AwsSagemakerFlowDefinitionArgsHumanLoopActivationConfig;
  human_loop_config: AwsSagemakerFlowDefinitionArgsHumanLoopConfig;
  human_loop_request_source?: AwsSagemakerFlowDefinitionArgsHumanLoopRequestSource;
  output_config: AwsSagemakerFlowDefinitionArgsOutputConfig;
}

export class aws_sagemaker_flow_definition extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerFlowDefinitionArgs) {
    const meta = {human_loop_activation_config:{isBlock:true,human_loop_activation_conditions_config:{isBlock:true}},human_loop_config:{isBlock:true,public_workforce_task_price:{isBlock:true,amount_in_usd:{isBlock:true}}},human_loop_request_source:{isBlock:true},output_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_flow_definition", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get flow_definition_name(): string {
    return `${this.resourceType}.${this.resourceName}.flow_definition_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.role_arn`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
