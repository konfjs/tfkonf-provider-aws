import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsBudgetsBudgetActionArgsActionThreshold {
  action_threshold_type: string;
  action_threshold_value: number;
}

export interface AwsBudgetsBudgetActionArgsDefinitionIamActionDefinition {
  groups?: string[];
  policy_arn: string;
  roles?: string[];
  users?: string[];
}

export interface AwsBudgetsBudgetActionArgsDefinitionScpActionDefinition {
  policy_id: string;
  target_ids: string[];
}

export interface AwsBudgetsBudgetActionArgsDefinitionSsmActionDefinition {
  action_sub_type: string;
  instance_ids: string[];
  region: string;
}

export interface AwsBudgetsBudgetActionArgsDefinition {
  iam_action_definition?: AwsBudgetsBudgetActionArgsDefinitionIamActionDefinition;
  scp_action_definition?: AwsBudgetsBudgetActionArgsDefinitionScpActionDefinition;
  ssm_action_definition?: AwsBudgetsBudgetActionArgsDefinitionSsmActionDefinition;
}

export interface AwsBudgetsBudgetActionArgsSubscriber {
  address: string;
  subscription_type: string;
}

export interface AwsBudgetsBudgetActionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface AwsBudgetsBudgetActionArgs {
  action_type: string;
  approval_model: string;
  budget_name: string;
  execution_role_arn: string;
  notification_type: string;
  tags?: { [key: string]: string };
  action_threshold: AwsBudgetsBudgetActionArgsActionThreshold;
  definition: AwsBudgetsBudgetActionArgsDefinition;
  subscriber: AwsBudgetsBudgetActionArgsSubscriber[];
  timeouts?: AwsBudgetsBudgetActionArgsTimeouts;
}

export class aws_budgets_budget_action extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: AwsBudgetsBudgetActionArgs) {
    const meta = {action_threshold:{isBlock:true},definition:{isBlock:true,iam_action_definition:{isBlock:true},scp_action_definition:{isBlock:true},ssm_action_definition:{isBlock:true}},subscriber:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "aws_budgets_budget_action", resourceName);
  }

  get account_id(): string {
    return `${this.resourceType}.${this.resourceName}.account_id`;
  }

  get action_id(): string {
    return `${this.resourceType}.${this.resourceName}.action_id`;
  }

  get action_type(): string {
    return `${this.resourceType}.${this.resourceName}.action_type`;
  }

  get approval_model(): string {
    return `${this.resourceType}.${this.resourceName}.approval_model`;
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get budget_name(): string {
    return `${this.resourceType}.${this.resourceName}.budget_name`;
  }

  get execution_role_arn(): string {
    return `${this.resourceType}.${this.resourceName}.execution_role_arn`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get notification_type(): string {
    return `${this.resourceType}.${this.resourceName}.notification_type`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }
}
