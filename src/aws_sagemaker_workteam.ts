import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsSagemakerWorkteamArgsMemberDefinitionCognitoMemberDefinition {
  client_id: string;
  user_group: string;
  user_pool: string;
}

export interface AwsSagemakerWorkteamArgsMemberDefinitionOidcMemberDefinition {
  groups: string[];
}

export interface AwsSagemakerWorkteamArgsMemberDefinition {
  cognito_member_definition?: AwsSagemakerWorkteamArgsMemberDefinitionCognitoMemberDefinition;
  oidc_member_definition?: AwsSagemakerWorkteamArgsMemberDefinitionOidcMemberDefinition;
}

export interface AwsSagemakerWorkteamArgsNotificationConfiguration {
  notification_topic_arn?: string;
}

export interface AwsSagemakerWorkteamArgsWorkerAccessConfigurationS3PresignIamPolicyConstraints {
}

export interface AwsSagemakerWorkteamArgsWorkerAccessConfigurationS3Presign {
  iam_policy_constraints?: AwsSagemakerWorkteamArgsWorkerAccessConfigurationS3PresignIamPolicyConstraints;
}

export interface AwsSagemakerWorkteamArgsWorkerAccessConfiguration {
  s3_presign?: AwsSagemakerWorkteamArgsWorkerAccessConfigurationS3Presign;
}

export interface AwsSagemakerWorkteamArgs {
  description: string;
  tags?: { [key: string]: string };
  workforce_name?: string;
  workteam_name: string;
  member_definition: AwsSagemakerWorkteamArgsMemberDefinition[];
  notification_configuration?: AwsSagemakerWorkteamArgsNotificationConfiguration;
  worker_access_configuration?: AwsSagemakerWorkteamArgsWorkerAccessConfiguration;
}

export class aws_sagemaker_workteam extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: AwsSagemakerWorkteamArgs) {
    const meta = {member_definition:{isBlock:true,cognito_member_definition:{isBlock:true},oidc_member_definition:{isBlock:true}},notification_configuration:{isBlock:true},worker_access_configuration:{isBlock:true,s3_presign:{isBlock:true,iam_policy_constraints:{isBlock:true}}}};
    super(terraformConfig, "resource", args, meta, "aws_sagemaker_workteam", resourceName);
  }

  get arn(): string {
    return `${this.resourceType}.${this.resourceName}.arn`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get subdomain(): string {
    return `${this.resourceType}.${this.resourceName}.subdomain`;
  }

  get tags_all(): string {
    return `${this.resourceType}.${this.resourceName}.tags_all`;
  }

  get workteam_name(): string {
    return `${this.resourceType}.${this.resourceName}.workteam_name`;
  }
}
