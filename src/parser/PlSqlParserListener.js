// Generated from src/parser/PlSqlParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PlSqlParser.
function PlSqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PlSqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PlSqlParserListener.prototype.constructor = PlSqlParserListener;

// Enter a parse tree produced by PlSqlParser#sql_script.
PlSqlParserListener.prototype.enterSql_script = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_script.
PlSqlParserListener.prototype.exitSql_script = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unit_statement.
PlSqlParserListener.prototype.enterUnit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unit_statement.
PlSqlParserListener.prototype.exitUnit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_diskgroup.
PlSqlParserListener.prototype.enterAlter_diskgroup = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_diskgroup.
PlSqlParserListener.prototype.exitAlter_diskgroup = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_disk_clause.
PlSqlParserListener.prototype.enterAdd_disk_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_disk_clause.
PlSqlParserListener.prototype.exitAdd_disk_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_disk_clause.
PlSqlParserListener.prototype.enterDrop_disk_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_disk_clause.
PlSqlParserListener.prototype.exitDrop_disk_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#resize_disk_clause.
PlSqlParserListener.prototype.enterResize_disk_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#resize_disk_clause.
PlSqlParserListener.prototype.exitResize_disk_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#replace_disk_clause.
PlSqlParserListener.prototype.enterReplace_disk_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#replace_disk_clause.
PlSqlParserListener.prototype.exitReplace_disk_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#wait_nowait.
PlSqlParserListener.prototype.enterWait_nowait = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#wait_nowait.
PlSqlParserListener.prototype.exitWait_nowait = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rename_disk_clause.
PlSqlParserListener.prototype.enterRename_disk_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rename_disk_clause.
PlSqlParserListener.prototype.exitRename_disk_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#disk_online_clause.
PlSqlParserListener.prototype.enterDisk_online_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#disk_online_clause.
PlSqlParserListener.prototype.exitDisk_online_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#disk_offline_clause.
PlSqlParserListener.prototype.enterDisk_offline_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#disk_offline_clause.
PlSqlParserListener.prototype.exitDisk_offline_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#timeout_clause.
PlSqlParserListener.prototype.enterTimeout_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#timeout_clause.
PlSqlParserListener.prototype.exitTimeout_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rebalance_diskgroup_clause.
PlSqlParserListener.prototype.enterRebalance_diskgroup_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rebalance_diskgroup_clause.
PlSqlParserListener.prototype.exitRebalance_diskgroup_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#phase.
PlSqlParserListener.prototype.enterPhase = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#phase.
PlSqlParserListener.prototype.exitPhase = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#check_diskgroup_clause.
PlSqlParserListener.prototype.enterCheck_diskgroup_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#check_diskgroup_clause.
PlSqlParserListener.prototype.exitCheck_diskgroup_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#diskgroup_template_clauses.
PlSqlParserListener.prototype.enterDiskgroup_template_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#diskgroup_template_clauses.
PlSqlParserListener.prototype.exitDiskgroup_template_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#qualified_template_clause.
PlSqlParserListener.prototype.enterQualified_template_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#qualified_template_clause.
PlSqlParserListener.prototype.exitQualified_template_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#redundancy_clause.
PlSqlParserListener.prototype.enterRedundancy_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#redundancy_clause.
PlSqlParserListener.prototype.exitRedundancy_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#striping_clause.
PlSqlParserListener.prototype.enterStriping_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#striping_clause.
PlSqlParserListener.prototype.exitStriping_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#force_noforce.
PlSqlParserListener.prototype.enterForce_noforce = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#force_noforce.
PlSqlParserListener.prototype.exitForce_noforce = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#diskgroup_directory_clauses.
PlSqlParserListener.prototype.enterDiskgroup_directory_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#diskgroup_directory_clauses.
PlSqlParserListener.prototype.exitDiskgroup_directory_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dir_name.
PlSqlParserListener.prototype.enterDir_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dir_name.
PlSqlParserListener.prototype.exitDir_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#diskgroup_alias_clauses.
PlSqlParserListener.prototype.enterDiskgroup_alias_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#diskgroup_alias_clauses.
PlSqlParserListener.prototype.exitDiskgroup_alias_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#diskgroup_volume_clauses.
PlSqlParserListener.prototype.enterDiskgroup_volume_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#diskgroup_volume_clauses.
PlSqlParserListener.prototype.exitDiskgroup_volume_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_volume_clause.
PlSqlParserListener.prototype.enterAdd_volume_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_volume_clause.
PlSqlParserListener.prototype.exitAdd_volume_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_volume_clause.
PlSqlParserListener.prototype.enterModify_volume_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_volume_clause.
PlSqlParserListener.prototype.exitModify_volume_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#diskgroup_attributes.
PlSqlParserListener.prototype.enterDiskgroup_attributes = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#diskgroup_attributes.
PlSqlParserListener.prototype.exitDiskgroup_attributes = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_diskgroup_file.
PlSqlParserListener.prototype.enterModify_diskgroup_file = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_diskgroup_file.
PlSqlParserListener.prototype.exitModify_diskgroup_file = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#disk_region_clause.
PlSqlParserListener.prototype.enterDisk_region_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#disk_region_clause.
PlSqlParserListener.prototype.exitDisk_region_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_diskgroup_file_clause.
PlSqlParserListener.prototype.enterDrop_diskgroup_file_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_diskgroup_file_clause.
PlSqlParserListener.prototype.exitDrop_diskgroup_file_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#convert_redundancy_clause.
PlSqlParserListener.prototype.enterConvert_redundancy_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#convert_redundancy_clause.
PlSqlParserListener.prototype.exitConvert_redundancy_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#usergroup_clauses.
PlSqlParserListener.prototype.enterUsergroup_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#usergroup_clauses.
PlSqlParserListener.prototype.exitUsergroup_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_clauses.
PlSqlParserListener.prototype.enterUser_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_clauses.
PlSqlParserListener.prototype.exitUser_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#file_permissions_clause.
PlSqlParserListener.prototype.enterFile_permissions_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#file_permissions_clause.
PlSqlParserListener.prototype.exitFile_permissions_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#file_owner_clause.
PlSqlParserListener.prototype.enterFile_owner_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#file_owner_clause.
PlSqlParserListener.prototype.exitFile_owner_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#scrub_clause.
PlSqlParserListener.prototype.enterScrub_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#scrub_clause.
PlSqlParserListener.prototype.exitScrub_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quotagroup_clauses.
PlSqlParserListener.prototype.enterQuotagroup_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quotagroup_clauses.
PlSqlParserListener.prototype.exitQuotagroup_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#property_name.
PlSqlParserListener.prototype.enterProperty_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#property_name.
PlSqlParserListener.prototype.exitProperty_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#property_value.
PlSqlParserListener.prototype.enterProperty_value = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#property_value.
PlSqlParserListener.prototype.exitProperty_value = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#filegroup_clauses.
PlSqlParserListener.prototype.enterFilegroup_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#filegroup_clauses.
PlSqlParserListener.prototype.exitFilegroup_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_filegroup_clause.
PlSqlParserListener.prototype.enterAdd_filegroup_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_filegroup_clause.
PlSqlParserListener.prototype.exitAdd_filegroup_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_filegroup_clause.
PlSqlParserListener.prototype.enterModify_filegroup_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_filegroup_clause.
PlSqlParserListener.prototype.exitModify_filegroup_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#move_to_filegroup_clause.
PlSqlParserListener.prototype.enterMove_to_filegroup_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#move_to_filegroup_clause.
PlSqlParserListener.prototype.exitMove_to_filegroup_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_filegroup_clause.
PlSqlParserListener.prototype.enterDrop_filegroup_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_filegroup_clause.
PlSqlParserListener.prototype.exitDrop_filegroup_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quorum_regular.
PlSqlParserListener.prototype.enterQuorum_regular = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quorum_regular.
PlSqlParserListener.prototype.exitQuorum_regular = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#undrop_disk_clause.
PlSqlParserListener.prototype.enterUndrop_disk_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#undrop_disk_clause.
PlSqlParserListener.prototype.exitUndrop_disk_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#diskgroup_availability.
PlSqlParserListener.prototype.enterDiskgroup_availability = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#diskgroup_availability.
PlSqlParserListener.prototype.exitDiskgroup_availability = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#enable_disable_volume.
PlSqlParserListener.prototype.enterEnable_disable_volume = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#enable_disable_volume.
PlSqlParserListener.prototype.exitEnable_disable_volume = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_function.
PlSqlParserListener.prototype.enterDrop_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_function.
PlSqlParserListener.prototype.exitDrop_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_flashback_archive.
PlSqlParserListener.prototype.enterAlter_flashback_archive = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_flashback_archive.
PlSqlParserListener.prototype.exitAlter_flashback_archive = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_hierarchy.
PlSqlParserListener.prototype.enterAlter_hierarchy = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_hierarchy.
PlSqlParserListener.prototype.exitAlter_hierarchy = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_function.
PlSqlParserListener.prototype.enterAlter_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_function.
PlSqlParserListener.prototype.exitAlter_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_java.
PlSqlParserListener.prototype.enterAlter_java = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_java.
PlSqlParserListener.prototype.exitAlter_java = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#match_string.
PlSqlParserListener.prototype.enterMatch_string = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#match_string.
PlSqlParserListener.prototype.exitMatch_string = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_function_body.
PlSqlParserListener.prototype.enterCreate_function_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_function_body.
PlSqlParserListener.prototype.exitCreate_function_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_macro_body.
PlSqlParserListener.prototype.enterSql_macro_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_macro_body.
PlSqlParserListener.prototype.exitSql_macro_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parallel_enable_clause.
PlSqlParserListener.prototype.enterParallel_enable_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parallel_enable_clause.
PlSqlParserListener.prototype.exitParallel_enable_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_by_clause.
PlSqlParserListener.prototype.enterPartition_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_by_clause.
PlSqlParserListener.prototype.exitPartition_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#result_cache_clause.
PlSqlParserListener.prototype.enterResult_cache_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#result_cache_clause.
PlSqlParserListener.prototype.exitResult_cache_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relies_on_part.
PlSqlParserListener.prototype.enterRelies_on_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relies_on_part.
PlSqlParserListener.prototype.exitRelies_on_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#streaming_clause.
PlSqlParserListener.prototype.enterStreaming_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#streaming_clause.
PlSqlParserListener.prototype.exitStreaming_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_outline.
PlSqlParserListener.prototype.enterAlter_outline = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_outline.
PlSqlParserListener.prototype.exitAlter_outline = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#outline_options.
PlSqlParserListener.prototype.enterOutline_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#outline_options.
PlSqlParserListener.prototype.exitOutline_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_lockdown_profile.
PlSqlParserListener.prototype.enterAlter_lockdown_profile = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_lockdown_profile.
PlSqlParserListener.prototype.exitAlter_lockdown_profile = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lockdown_feature.
PlSqlParserListener.prototype.enterLockdown_feature = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lockdown_feature.
PlSqlParserListener.prototype.exitLockdown_feature = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lockdown_options.
PlSqlParserListener.prototype.enterLockdown_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lockdown_options.
PlSqlParserListener.prototype.exitLockdown_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lockdown_statements.
PlSqlParserListener.prototype.enterLockdown_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lockdown_statements.
PlSqlParserListener.prototype.exitLockdown_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#statement_clauses.
PlSqlParserListener.prototype.enterStatement_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#statement_clauses.
PlSqlParserListener.prototype.exitStatement_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#clause_options.
PlSqlParserListener.prototype.enterClause_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#clause_options.
PlSqlParserListener.prototype.exitClause_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#option_values.
PlSqlParserListener.prototype.enterOption_values = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#option_values.
PlSqlParserListener.prototype.exitOption_values = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#string_list.
PlSqlParserListener.prototype.enterString_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#string_list.
PlSqlParserListener.prototype.exitString_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#disable_enable.
PlSqlParserListener.prototype.enterDisable_enable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#disable_enable.
PlSqlParserListener.prototype.exitDisable_enable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_lockdown_profile.
PlSqlParserListener.prototype.enterDrop_lockdown_profile = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_lockdown_profile.
PlSqlParserListener.prototype.exitDrop_lockdown_profile = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_package.
PlSqlParserListener.prototype.enterDrop_package = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_package.
PlSqlParserListener.prototype.exitDrop_package = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_package.
PlSqlParserListener.prototype.enterAlter_package = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_package.
PlSqlParserListener.prototype.exitAlter_package = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_package.
PlSqlParserListener.prototype.enterCreate_package = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_package.
PlSqlParserListener.prototype.exitCreate_package = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_package_body.
PlSqlParserListener.prototype.enterCreate_package_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_package_body.
PlSqlParserListener.prototype.exitCreate_package_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#package_obj_spec.
PlSqlParserListener.prototype.enterPackage_obj_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#package_obj_spec.
PlSqlParserListener.prototype.exitPackage_obj_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_spec.
PlSqlParserListener.prototype.enterProcedure_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_spec.
PlSqlParserListener.prototype.exitProcedure_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_spec.
PlSqlParserListener.prototype.enterFunction_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_spec.
PlSqlParserListener.prototype.exitFunction_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#package_obj_body.
PlSqlParserListener.prototype.enterPackage_obj_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#package_obj_body.
PlSqlParserListener.prototype.exitPackage_obj_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_pmem_filestore.
PlSqlParserListener.prototype.enterAlter_pmem_filestore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_pmem_filestore.
PlSqlParserListener.prototype.exitAlter_pmem_filestore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_pmem_filestore.
PlSqlParserListener.prototype.enterDrop_pmem_filestore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_pmem_filestore.
PlSqlParserListener.prototype.exitDrop_pmem_filestore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_procedure.
PlSqlParserListener.prototype.enterDrop_procedure = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_procedure.
PlSqlParserListener.prototype.exitDrop_procedure = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_procedure.
PlSqlParserListener.prototype.enterAlter_procedure = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_procedure.
PlSqlParserListener.prototype.exitAlter_procedure = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_body.
PlSqlParserListener.prototype.enterFunction_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_body.
PlSqlParserListener.prototype.exitFunction_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_body.
PlSqlParserListener.prototype.enterProcedure_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_body.
PlSqlParserListener.prototype.exitProcedure_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_procedure_body.
PlSqlParserListener.prototype.enterCreate_procedure_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_procedure_body.
PlSqlParserListener.prototype.exitCreate_procedure_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_resource_cost.
PlSqlParserListener.prototype.enterAlter_resource_cost = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_resource_cost.
PlSqlParserListener.prototype.exitAlter_resource_cost = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_outline.
PlSqlParserListener.prototype.enterDrop_outline = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_outline.
PlSqlParserListener.prototype.exitDrop_outline = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_rollback_segment.
PlSqlParserListener.prototype.enterAlter_rollback_segment = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_rollback_segment.
PlSqlParserListener.prototype.exitAlter_rollback_segment = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_restore_point.
PlSqlParserListener.prototype.enterDrop_restore_point = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_restore_point.
PlSqlParserListener.prototype.exitDrop_restore_point = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_rollback_segment.
PlSqlParserListener.prototype.enterDrop_rollback_segment = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_rollback_segment.
PlSqlParserListener.prototype.exitDrop_rollback_segment = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_role.
PlSqlParserListener.prototype.enterDrop_role = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_role.
PlSqlParserListener.prototype.exitDrop_role = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_pmem_filestore.
PlSqlParserListener.prototype.enterCreate_pmem_filestore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_pmem_filestore.
PlSqlParserListener.prototype.exitCreate_pmem_filestore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pmem_filestore_options.
PlSqlParserListener.prototype.enterPmem_filestore_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pmem_filestore_options.
PlSqlParserListener.prototype.exitPmem_filestore_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#file_path.
PlSqlParserListener.prototype.enterFile_path = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#file_path.
PlSqlParserListener.prototype.exitFile_path = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_rollback_segment.
PlSqlParserListener.prototype.enterCreate_rollback_segment = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_rollback_segment.
PlSqlParserListener.prototype.exitCreate_rollback_segment = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_trigger.
PlSqlParserListener.prototype.enterDrop_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_trigger.
PlSqlParserListener.prototype.exitDrop_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_trigger.
PlSqlParserListener.prototype.enterAlter_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_trigger.
PlSqlParserListener.prototype.exitAlter_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_trigger.
PlSqlParserListener.prototype.enterCreate_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_trigger.
PlSqlParserListener.prototype.exitCreate_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_follows_clause.
PlSqlParserListener.prototype.enterTrigger_follows_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_follows_clause.
PlSqlParserListener.prototype.exitTrigger_follows_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_when_clause.
PlSqlParserListener.prototype.enterTrigger_when_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_when_clause.
PlSqlParserListener.prototype.exitTrigger_when_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#simple_dml_trigger.
PlSqlParserListener.prototype.enterSimple_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#simple_dml_trigger.
PlSqlParserListener.prototype.exitSimple_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_each_row.
PlSqlParserListener.prototype.enterFor_each_row = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_each_row.
PlSqlParserListener.prototype.exitFor_each_row = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compound_dml_trigger.
PlSqlParserListener.prototype.enterCompound_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compound_dml_trigger.
PlSqlParserListener.prototype.exitCompound_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_dml_trigger.
PlSqlParserListener.prototype.enterNon_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_dml_trigger.
PlSqlParserListener.prototype.exitNon_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_body.
PlSqlParserListener.prototype.enterTrigger_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_body.
PlSqlParserListener.prototype.exitTrigger_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#routine_clause.
PlSqlParserListener.prototype.enterRoutine_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#routine_clause.
PlSqlParserListener.prototype.exitRoutine_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compound_trigger_block.
PlSqlParserListener.prototype.enterCompound_trigger_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compound_trigger_block.
PlSqlParserListener.prototype.exitCompound_trigger_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#timing_point_section.
PlSqlParserListener.prototype.enterTiming_point_section = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#timing_point_section.
PlSqlParserListener.prototype.exitTiming_point_section = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_dml_event.
PlSqlParserListener.prototype.enterNon_dml_event = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_dml_event.
PlSqlParserListener.prototype.exitNon_dml_event = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_event_clause.
PlSqlParserListener.prototype.enterDml_event_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_event_clause.
PlSqlParserListener.prototype.exitDml_event_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_event_element.
PlSqlParserListener.prototype.enterDml_event_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_event_element.
PlSqlParserListener.prototype.exitDml_event_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_event_nested_clause.
PlSqlParserListener.prototype.enterDml_event_nested_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_event_nested_clause.
PlSqlParserListener.prototype.exitDml_event_nested_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#referencing_clause.
PlSqlParserListener.prototype.enterReferencing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#referencing_clause.
PlSqlParserListener.prototype.exitReferencing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#referencing_element.
PlSqlParserListener.prototype.enterReferencing_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#referencing_element.
PlSqlParserListener.prototype.exitReferencing_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_type.
PlSqlParserListener.prototype.enterDrop_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_type.
PlSqlParserListener.prototype.exitDrop_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_type.
PlSqlParserListener.prototype.enterAlter_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_type.
PlSqlParserListener.prototype.exitAlter_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compile_type_clause.
PlSqlParserListener.prototype.enterCompile_type_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compile_type_clause.
PlSqlParserListener.prototype.exitCompile_type_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#replace_type_clause.
PlSqlParserListener.prototype.enterReplace_type_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#replace_type_clause.
PlSqlParserListener.prototype.exitReplace_type_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_method_spec.
PlSqlParserListener.prototype.enterAlter_method_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_method_spec.
PlSqlParserListener.prototype.exitAlter_method_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_method_element.
PlSqlParserListener.prototype.enterAlter_method_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_method_element.
PlSqlParserListener.prototype.exitAlter_method_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_attribute_definition.
PlSqlParserListener.prototype.enterAlter_attribute_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_attribute_definition.
PlSqlParserListener.prototype.exitAlter_attribute_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#attribute_definition.
PlSqlParserListener.prototype.enterAttribute_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#attribute_definition.
PlSqlParserListener.prototype.exitAttribute_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_collection_clauses.
PlSqlParserListener.prototype.enterAlter_collection_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_collection_clauses.
PlSqlParserListener.prototype.exitAlter_collection_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dependent_handling_clause.
PlSqlParserListener.prototype.enterDependent_handling_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dependent_handling_clause.
PlSqlParserListener.prototype.exitDependent_handling_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dependent_exceptions_part.
PlSqlParserListener.prototype.enterDependent_exceptions_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dependent_exceptions_part.
PlSqlParserListener.prototype.exitDependent_exceptions_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_type.
PlSqlParserListener.prototype.enterCreate_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_type.
PlSqlParserListener.prototype.exitCreate_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_definition.
PlSqlParserListener.prototype.enterType_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_definition.
PlSqlParserListener.prototype.exitType_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_type_def.
PlSqlParserListener.prototype.enterObject_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_type_def.
PlSqlParserListener.prototype.exitObject_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_as_part.
PlSqlParserListener.prototype.enterObject_as_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_as_part.
PlSqlParserListener.prototype.exitObject_as_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_under_part.
PlSqlParserListener.prototype.enterObject_under_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_under_part.
PlSqlParserListener.prototype.exitObject_under_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#nested_table_type_def.
PlSqlParserListener.prototype.enterNested_table_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#nested_table_type_def.
PlSqlParserListener.prototype.exitNested_table_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sqlj_object_type.
PlSqlParserListener.prototype.enterSqlj_object_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sqlj_object_type.
PlSqlParserListener.prototype.exitSqlj_object_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_body.
PlSqlParserListener.prototype.enterType_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_body.
PlSqlParserListener.prototype.exitType_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_body_elements.
PlSqlParserListener.prototype.enterType_body_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_body_elements.
PlSqlParserListener.prototype.exitType_body_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#map_order_func_declaration.
PlSqlParserListener.prototype.enterMap_order_func_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#map_order_func_declaration.
PlSqlParserListener.prototype.exitMap_order_func_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subprog_decl_in_type.
PlSqlParserListener.prototype.enterSubprog_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subprog_decl_in_type.
PlSqlParserListener.prototype.exitSubprog_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#proc_decl_in_type.
PlSqlParserListener.prototype.enterProc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#proc_decl_in_type.
PlSqlParserListener.prototype.exitProc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#func_decl_in_type.
PlSqlParserListener.prototype.enterFunc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#func_decl_in_type.
PlSqlParserListener.prototype.exitFunc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constructor_declaration.
PlSqlParserListener.prototype.enterConstructor_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constructor_declaration.
PlSqlParserListener.prototype.exitConstructor_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modifier_clause.
PlSqlParserListener.prototype.enterModifier_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modifier_clause.
PlSqlParserListener.prototype.exitModifier_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_member_spec.
PlSqlParserListener.prototype.enterObject_member_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_member_spec.
PlSqlParserListener.prototype.exitObject_member_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sqlj_object_type_attr.
PlSqlParserListener.prototype.enterSqlj_object_type_attr = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sqlj_object_type_attr.
PlSqlParserListener.prototype.exitSqlj_object_type_attr = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#element_spec.
PlSqlParserListener.prototype.enterElement_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#element_spec.
PlSqlParserListener.prototype.exitElement_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#element_spec_options.
PlSqlParserListener.prototype.enterElement_spec_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#element_spec_options.
PlSqlParserListener.prototype.exitElement_spec_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subprogram_spec.
PlSqlParserListener.prototype.enterSubprogram_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subprogram_spec.
PlSqlParserListener.prototype.exitSubprogram_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#overriding_subprogram_spec.
PlSqlParserListener.prototype.enterOverriding_subprogram_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#overriding_subprogram_spec.
PlSqlParserListener.prototype.exitOverriding_subprogram_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#overriding_function_spec.
PlSqlParserListener.prototype.enterOverriding_function_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#overriding_function_spec.
PlSqlParserListener.prototype.exitOverriding_function_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_procedure_spec.
PlSqlParserListener.prototype.enterType_procedure_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_procedure_spec.
PlSqlParserListener.prototype.exitType_procedure_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_function_spec.
PlSqlParserListener.prototype.enterType_function_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_function_spec.
PlSqlParserListener.prototype.exitType_function_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constructor_spec.
PlSqlParserListener.prototype.enterConstructor_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constructor_spec.
PlSqlParserListener.prototype.exitConstructor_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#map_order_function_spec.
PlSqlParserListener.prototype.enterMap_order_function_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#map_order_function_spec.
PlSqlParserListener.prototype.exitMap_order_function_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pragma_clause.
PlSqlParserListener.prototype.enterPragma_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pragma_clause.
PlSqlParserListener.prototype.exitPragma_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pragma_elements.
PlSqlParserListener.prototype.enterPragma_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pragma_elements.
PlSqlParserListener.prototype.exitPragma_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_elements_parameter.
PlSqlParserListener.prototype.enterType_elements_parameter = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_elements_parameter.
PlSqlParserListener.prototype.exitType_elements_parameter = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_sequence.
PlSqlParserListener.prototype.enterDrop_sequence = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_sequence.
PlSqlParserListener.prototype.exitDrop_sequence = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_sequence.
PlSqlParserListener.prototype.enterAlter_sequence = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_sequence.
PlSqlParserListener.prototype.exitAlter_sequence = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_session.
PlSqlParserListener.prototype.enterAlter_session = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_session.
PlSqlParserListener.prototype.exitAlter_session = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_session_set_clause.
PlSqlParserListener.prototype.enterAlter_session_set_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_session_set_clause.
PlSqlParserListener.prototype.exitAlter_session_set_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_sequence.
PlSqlParserListener.prototype.enterCreate_sequence = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_sequence.
PlSqlParserListener.prototype.exitCreate_sequence = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sequence_spec.
PlSqlParserListener.prototype.enterSequence_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sequence_spec.
PlSqlParserListener.prototype.exitSequence_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sequence_start_clause.
PlSqlParserListener.prototype.enterSequence_start_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sequence_start_clause.
PlSqlParserListener.prototype.exitSequence_start_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_analytic_view.
PlSqlParserListener.prototype.enterCreate_analytic_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_analytic_view.
PlSqlParserListener.prototype.exitCreate_analytic_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#classification_clause.
PlSqlParserListener.prototype.enterClassification_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#classification_clause.
PlSqlParserListener.prototype.exitClassification_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#caption_clause.
PlSqlParserListener.prototype.enterCaption_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#caption_clause.
PlSqlParserListener.prototype.exitCaption_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#description_clause.
PlSqlParserListener.prototype.enterDescription_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#description_clause.
PlSqlParserListener.prototype.exitDescription_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#classification_item.
PlSqlParserListener.prototype.enterClassification_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#classification_item.
PlSqlParserListener.prototype.exitClassification_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#language.
PlSqlParserListener.prototype.enterLanguage = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#language.
PlSqlParserListener.prototype.exitLanguage = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cav_using_clause.
PlSqlParserListener.prototype.enterCav_using_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cav_using_clause.
PlSqlParserListener.prototype.exitCav_using_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dim_by_clause.
PlSqlParserListener.prototype.enterDim_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dim_by_clause.
PlSqlParserListener.prototype.exitDim_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dim_key.
PlSqlParserListener.prototype.enterDim_key = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dim_key.
PlSqlParserListener.prototype.exitDim_key = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dim_ref.
PlSqlParserListener.prototype.enterDim_ref = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dim_ref.
PlSqlParserListener.prototype.exitDim_ref = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hier_ref.
PlSqlParserListener.prototype.enterHier_ref = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hier_ref.
PlSqlParserListener.prototype.exitHier_ref = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#measures_clause.
PlSqlParserListener.prototype.enterMeasures_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#measures_clause.
PlSqlParserListener.prototype.exitMeasures_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#av_measure.
PlSqlParserListener.prototype.enterAv_measure = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#av_measure.
PlSqlParserListener.prototype.exitAv_measure = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#base_meas_clause.
PlSqlParserListener.prototype.enterBase_meas_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#base_meas_clause.
PlSqlParserListener.prototype.exitBase_meas_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#meas_aggregate_clause.
PlSqlParserListener.prototype.enterMeas_aggregate_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#meas_aggregate_clause.
PlSqlParserListener.prototype.exitMeas_aggregate_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#calc_meas_clause.
PlSqlParserListener.prototype.enterCalc_meas_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#calc_meas_clause.
PlSqlParserListener.prototype.exitCalc_meas_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_measure_clause.
PlSqlParserListener.prototype.enterDefault_measure_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_measure_clause.
PlSqlParserListener.prototype.exitDefault_measure_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_aggregate_clause.
PlSqlParserListener.prototype.enterDefault_aggregate_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_aggregate_clause.
PlSqlParserListener.prototype.exitDefault_aggregate_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cache_clause.
PlSqlParserListener.prototype.enterCache_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cache_clause.
PlSqlParserListener.prototype.exitCache_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cache_specification.
PlSqlParserListener.prototype.enterCache_specification = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cache_specification.
PlSqlParserListener.prototype.exitCache_specification = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#levels_clause.
PlSqlParserListener.prototype.enterLevels_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#levels_clause.
PlSqlParserListener.prototype.exitLevels_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#level_specification.
PlSqlParserListener.prototype.enterLevel_specification = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#level_specification.
PlSqlParserListener.prototype.exitLevel_specification = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#level_group_type.
PlSqlParserListener.prototype.enterLevel_group_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#level_group_type.
PlSqlParserListener.prototype.exitLevel_group_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#fact_columns_clause.
PlSqlParserListener.prototype.enterFact_columns_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#fact_columns_clause.
PlSqlParserListener.prototype.exitFact_columns_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#qry_transform_clause.
PlSqlParserListener.prototype.enterQry_transform_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#qry_transform_clause.
PlSqlParserListener.prototype.exitQry_transform_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_attribute_dimension.
PlSqlParserListener.prototype.enterCreate_attribute_dimension = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_attribute_dimension.
PlSqlParserListener.prototype.exitCreate_attribute_dimension = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ad_using_clause.
PlSqlParserListener.prototype.enterAd_using_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ad_using_clause.
PlSqlParserListener.prototype.exitAd_using_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#source_clause.
PlSqlParserListener.prototype.enterSource_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#source_clause.
PlSqlParserListener.prototype.exitSource_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_path_clause.
PlSqlParserListener.prototype.enterJoin_path_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_path_clause.
PlSqlParserListener.prototype.exitJoin_path_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_condition.
PlSqlParserListener.prototype.enterJoin_condition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_condition.
PlSqlParserListener.prototype.exitJoin_condition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_condition_item.
PlSqlParserListener.prototype.enterJoin_condition_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_condition_item.
PlSqlParserListener.prototype.exitJoin_condition_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#attributes_clause.
PlSqlParserListener.prototype.enterAttributes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#attributes_clause.
PlSqlParserListener.prototype.exitAttributes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ad_attributes_clause.
PlSqlParserListener.prototype.enterAd_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ad_attributes_clause.
PlSqlParserListener.prototype.exitAd_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ad_level_clause.
PlSqlParserListener.prototype.enterAd_level_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ad_level_clause.
PlSqlParserListener.prototype.exitAd_level_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#key_clause.
PlSqlParserListener.prototype.enterKey_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#key_clause.
PlSqlParserListener.prototype.exitKey_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alternate_key_clause.
PlSqlParserListener.prototype.enterAlternate_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alternate_key_clause.
PlSqlParserListener.prototype.exitAlternate_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dim_order_clause.
PlSqlParserListener.prototype.enterDim_order_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dim_order_clause.
PlSqlParserListener.prototype.exitDim_order_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#all_clause.
PlSqlParserListener.prototype.enterAll_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#all_clause.
PlSqlParserListener.prototype.exitAll_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_audit_policy.
PlSqlParserListener.prototype.enterCreate_audit_policy = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_audit_policy.
PlSqlParserListener.prototype.exitCreate_audit_policy = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#privilege_audit_clause.
PlSqlParserListener.prototype.enterPrivilege_audit_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#privilege_audit_clause.
PlSqlParserListener.prototype.exitPrivilege_audit_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#action_audit_clause.
PlSqlParserListener.prototype.enterAction_audit_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#action_audit_clause.
PlSqlParserListener.prototype.exitAction_audit_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#system_actions.
PlSqlParserListener.prototype.enterSystem_actions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#system_actions.
PlSqlParserListener.prototype.exitSystem_actions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#standard_actions.
PlSqlParserListener.prototype.enterStandard_actions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#standard_actions.
PlSqlParserListener.prototype.exitStandard_actions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#actions_clause.
PlSqlParserListener.prototype.enterActions_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#actions_clause.
PlSqlParserListener.prototype.exitActions_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_action.
PlSqlParserListener.prototype.enterObject_action = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_action.
PlSqlParserListener.prototype.exitObject_action = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#system_action.
PlSqlParserListener.prototype.enterSystem_action = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#system_action.
PlSqlParserListener.prototype.exitSystem_action = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#component_actions.
PlSqlParserListener.prototype.enterComponent_actions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#component_actions.
PlSqlParserListener.prototype.exitComponent_actions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#component_action.
PlSqlParserListener.prototype.enterComponent_action = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#component_action.
PlSqlParserListener.prototype.exitComponent_action = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#role_audit_clause.
PlSqlParserListener.prototype.enterRole_audit_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#role_audit_clause.
PlSqlParserListener.prototype.exitRole_audit_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_controlfile.
PlSqlParserListener.prototype.enterCreate_controlfile = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_controlfile.
PlSqlParserListener.prototype.exitCreate_controlfile = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#controlfile_options.
PlSqlParserListener.prototype.enterControlfile_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#controlfile_options.
PlSqlParserListener.prototype.exitControlfile_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logfile_clause.
PlSqlParserListener.prototype.enterLogfile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logfile_clause.
PlSqlParserListener.prototype.exitLogfile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#character_set_clause.
PlSqlParserListener.prototype.enterCharacter_set_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#character_set_clause.
PlSqlParserListener.prototype.exitCharacter_set_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#file_specification.
PlSqlParserListener.prototype.enterFile_specification = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#file_specification.
PlSqlParserListener.prototype.exitFile_specification = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_diskgroup.
PlSqlParserListener.prototype.enterCreate_diskgroup = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_diskgroup.
PlSqlParserListener.prototype.exitCreate_diskgroup = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#qualified_disk_clause.
PlSqlParserListener.prototype.enterQualified_disk_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#qualified_disk_clause.
PlSqlParserListener.prototype.exitQualified_disk_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_edition.
PlSqlParserListener.prototype.enterCreate_edition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_edition.
PlSqlParserListener.prototype.exitCreate_edition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_flashback_archive.
PlSqlParserListener.prototype.enterCreate_flashback_archive = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_flashback_archive.
PlSqlParserListener.prototype.exitCreate_flashback_archive = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_archive_quota.
PlSqlParserListener.prototype.enterFlashback_archive_quota = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_archive_quota.
PlSqlParserListener.prototype.exitFlashback_archive_quota = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_archive_retention.
PlSqlParserListener.prototype.enterFlashback_archive_retention = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_archive_retention.
PlSqlParserListener.prototype.exitFlashback_archive_retention = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_hierarchy.
PlSqlParserListener.prototype.enterCreate_hierarchy = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_hierarchy.
PlSqlParserListener.prototype.exitCreate_hierarchy = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hier_using_clause.
PlSqlParserListener.prototype.enterHier_using_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hier_using_clause.
PlSqlParserListener.prototype.exitHier_using_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#level_hier_clause.
PlSqlParserListener.prototype.enterLevel_hier_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#level_hier_clause.
PlSqlParserListener.prototype.exitLevel_hier_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hier_attrs_clause.
PlSqlParserListener.prototype.enterHier_attrs_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hier_attrs_clause.
PlSqlParserListener.prototype.exitHier_attrs_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hier_attr_clause.
PlSqlParserListener.prototype.enterHier_attr_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hier_attr_clause.
PlSqlParserListener.prototype.exitHier_attr_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hier_attr_name.
PlSqlParserListener.prototype.enterHier_attr_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hier_attr_name.
PlSqlParserListener.prototype.exitHier_attr_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_index.
PlSqlParserListener.prototype.enterCreate_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_index.
PlSqlParserListener.prototype.exitCreate_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cluster_index_clause.
PlSqlParserListener.prototype.enterCluster_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cluster_index_clause.
PlSqlParserListener.prototype.exitCluster_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cluster_name.
PlSqlParserListener.prototype.enterCluster_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cluster_name.
PlSqlParserListener.prototype.exitCluster_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_index_clause.
PlSqlParserListener.prototype.enterTable_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_index_clause.
PlSqlParserListener.prototype.exitTable_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#bitmap_join_index_clause.
PlSqlParserListener.prototype.enterBitmap_join_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#bitmap_join_index_clause.
PlSqlParserListener.prototype.exitBitmap_join_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_expr.
PlSqlParserListener.prototype.enterIndex_expr = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_expr.
PlSqlParserListener.prototype.exitIndex_expr = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_properties.
PlSqlParserListener.prototype.enterIndex_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_properties.
PlSqlParserListener.prototype.exitIndex_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#domain_index_clause.
PlSqlParserListener.prototype.enterDomain_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#domain_index_clause.
PlSqlParserListener.prototype.exitDomain_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#local_domain_index_clause.
PlSqlParserListener.prototype.enterLocal_domain_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#local_domain_index_clause.
PlSqlParserListener.prototype.exitLocal_domain_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlindex_clause.
PlSqlParserListener.prototype.enterXmlindex_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlindex_clause.
PlSqlParserListener.prototype.exitXmlindex_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#local_xmlindex_clause.
PlSqlParserListener.prototype.enterLocal_xmlindex_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#local_xmlindex_clause.
PlSqlParserListener.prototype.exitLocal_xmlindex_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#global_partitioned_index.
PlSqlParserListener.prototype.enterGlobal_partitioned_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#global_partitioned_index.
PlSqlParserListener.prototype.exitGlobal_partitioned_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_partitioning_clause.
PlSqlParserListener.prototype.enterIndex_partitioning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_partitioning_clause.
PlSqlParserListener.prototype.exitIndex_partitioning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#local_partitioned_index.
PlSqlParserListener.prototype.enterLocal_partitioned_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#local_partitioned_index.
PlSqlParserListener.prototype.exitLocal_partitioned_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_range_partitioned_table.
PlSqlParserListener.prototype.enterOn_range_partitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_range_partitioned_table.
PlSqlParserListener.prototype.exitOn_range_partitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_list_partitioned_table.
PlSqlParserListener.prototype.enterOn_list_partitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_list_partitioned_table.
PlSqlParserListener.prototype.exitOn_list_partitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partitioned_table.
PlSqlParserListener.prototype.enterPartitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partitioned_table.
PlSqlParserListener.prototype.exitPartitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_hash_partitioned_table.
PlSqlParserListener.prototype.enterOn_hash_partitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_hash_partitioned_table.
PlSqlParserListener.prototype.exitOn_hash_partitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_hash_partitioned_clause.
PlSqlParserListener.prototype.enterOn_hash_partitioned_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_hash_partitioned_clause.
PlSqlParserListener.prototype.exitOn_hash_partitioned_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_comp_partitioned_table.
PlSqlParserListener.prototype.enterOn_comp_partitioned_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_comp_partitioned_table.
PlSqlParserListener.prototype.exitOn_comp_partitioned_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_comp_partitioned_clause.
PlSqlParserListener.prototype.enterOn_comp_partitioned_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_comp_partitioned_clause.
PlSqlParserListener.prototype.exitOn_comp_partitioned_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_subpartition_clause.
PlSqlParserListener.prototype.enterIndex_subpartition_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_subpartition_clause.
PlSqlParserListener.prototype.exitIndex_subpartition_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_subpartition_subclause.
PlSqlParserListener.prototype.enterIndex_subpartition_subclause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_subpartition_subclause.
PlSqlParserListener.prototype.exitIndex_subpartition_subclause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#odci_parameters.
PlSqlParserListener.prototype.enterOdci_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#odci_parameters.
PlSqlParserListener.prototype.exitOdci_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#indextype.
PlSqlParserListener.prototype.enterIndextype = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#indextype.
PlSqlParserListener.prototype.exitIndextype = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_index.
PlSqlParserListener.prototype.enterAlter_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_index.
PlSqlParserListener.prototype.exitAlter_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_index_ops_set1.
PlSqlParserListener.prototype.enterAlter_index_ops_set1 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_index_ops_set1.
PlSqlParserListener.prototype.exitAlter_index_ops_set1 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_index_ops_set2.
PlSqlParserListener.prototype.enterAlter_index_ops_set2 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_index_ops_set2.
PlSqlParserListener.prototype.exitAlter_index_ops_set2 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#visible_or_invisible.
PlSqlParserListener.prototype.enterVisible_or_invisible = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#visible_or_invisible.
PlSqlParserListener.prototype.exitVisible_or_invisible = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#monitoring_nomonitoring.
PlSqlParserListener.prototype.enterMonitoring_nomonitoring = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#monitoring_nomonitoring.
PlSqlParserListener.prototype.exitMonitoring_nomonitoring = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rebuild_clause.
PlSqlParserListener.prototype.enterRebuild_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rebuild_clause.
PlSqlParserListener.prototype.exitRebuild_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_index_partitioning.
PlSqlParserListener.prototype.enterAlter_index_partitioning = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_index_partitioning.
PlSqlParserListener.prototype.exitAlter_index_partitioning = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_index_default_attrs.
PlSqlParserListener.prototype.enterModify_index_default_attrs = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_index_default_attrs.
PlSqlParserListener.prototype.exitModify_index_default_attrs = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_hash_index_partition.
PlSqlParserListener.prototype.enterAdd_hash_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_hash_index_partition.
PlSqlParserListener.prototype.exitAdd_hash_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#coalesce_index_partition.
PlSqlParserListener.prototype.enterCoalesce_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#coalesce_index_partition.
PlSqlParserListener.prototype.exitCoalesce_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_index_partition.
PlSqlParserListener.prototype.enterModify_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_index_partition.
PlSqlParserListener.prototype.exitModify_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_index_partitions_ops.
PlSqlParserListener.prototype.enterModify_index_partitions_ops = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_index_partitions_ops.
PlSqlParserListener.prototype.exitModify_index_partitions_ops = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rename_index_partition.
PlSqlParserListener.prototype.enterRename_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rename_index_partition.
PlSqlParserListener.prototype.exitRename_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_index_partition.
PlSqlParserListener.prototype.enterDrop_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_index_partition.
PlSqlParserListener.prototype.exitDrop_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#split_index_partition.
PlSqlParserListener.prototype.enterSplit_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#split_index_partition.
PlSqlParserListener.prototype.exitSplit_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_partition_description.
PlSqlParserListener.prototype.enterIndex_partition_description = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_partition_description.
PlSqlParserListener.prototype.exitIndex_partition_description = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_index_subpartition.
PlSqlParserListener.prototype.enterModify_index_subpartition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_index_subpartition.
PlSqlParserListener.prototype.exitModify_index_subpartition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_name_old.
PlSqlParserListener.prototype.enterPartition_name_old = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_name_old.
PlSqlParserListener.prototype.exitPartition_name_old = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_partition_name.
PlSqlParserListener.prototype.enterNew_partition_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_partition_name.
PlSqlParserListener.prototype.exitNew_partition_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_index_name.
PlSqlParserListener.prototype.enterNew_index_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_index_name.
PlSqlParserListener.prototype.exitNew_index_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_inmemory_join_group.
PlSqlParserListener.prototype.enterAlter_inmemory_join_group = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_inmemory_join_group.
PlSqlParserListener.prototype.exitAlter_inmemory_join_group = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_user.
PlSqlParserListener.prototype.enterCreate_user = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_user.
PlSqlParserListener.prototype.exitCreate_user = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_user.
PlSqlParserListener.prototype.enterAlter_user = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_user.
PlSqlParserListener.prototype.exitAlter_user = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_user.
PlSqlParserListener.prototype.enterDrop_user = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_user.
PlSqlParserListener.prototype.exitDrop_user = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_identified_by.
PlSqlParserListener.prototype.enterAlter_identified_by = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_identified_by.
PlSqlParserListener.prototype.exitAlter_identified_by = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identified_by.
PlSqlParserListener.prototype.enterIdentified_by = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identified_by.
PlSqlParserListener.prototype.exitIdentified_by = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identified_other_clause.
PlSqlParserListener.prototype.enterIdentified_other_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identified_other_clause.
PlSqlParserListener.prototype.exitIdentified_other_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_tablespace_clause.
PlSqlParserListener.prototype.enterUser_tablespace_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_tablespace_clause.
PlSqlParserListener.prototype.exitUser_tablespace_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quota_clause.
PlSqlParserListener.prototype.enterQuota_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quota_clause.
PlSqlParserListener.prototype.exitQuota_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#profile_clause.
PlSqlParserListener.prototype.enterProfile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#profile_clause.
PlSqlParserListener.prototype.exitProfile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#role_clause.
PlSqlParserListener.prototype.enterRole_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#role_clause.
PlSqlParserListener.prototype.exitRole_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_default_role_clause.
PlSqlParserListener.prototype.enterUser_default_role_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_default_role_clause.
PlSqlParserListener.prototype.exitUser_default_role_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#password_expire_clause.
PlSqlParserListener.prototype.enterPassword_expire_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#password_expire_clause.
PlSqlParserListener.prototype.exitPassword_expire_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_lock_clause.
PlSqlParserListener.prototype.enterUser_lock_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_lock_clause.
PlSqlParserListener.prototype.exitUser_lock_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_editions_clause.
PlSqlParserListener.prototype.enterUser_editions_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_editions_clause.
PlSqlParserListener.prototype.exitUser_editions_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_user_editions_clause.
PlSqlParserListener.prototype.enterAlter_user_editions_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_user_editions_clause.
PlSqlParserListener.prototype.exitAlter_user_editions_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#proxy_clause.
PlSqlParserListener.prototype.enterProxy_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#proxy_clause.
PlSqlParserListener.prototype.exitProxy_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#container_names.
PlSqlParserListener.prototype.enterContainer_names = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#container_names.
PlSqlParserListener.prototype.exitContainer_names = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_container_data.
PlSqlParserListener.prototype.enterSet_container_data = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_container_data.
PlSqlParserListener.prototype.exitSet_container_data = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_rem_container_data.
PlSqlParserListener.prototype.enterAdd_rem_container_data = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_rem_container_data.
PlSqlParserListener.prototype.exitAdd_rem_container_data = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#container_data_clause.
PlSqlParserListener.prototype.enterContainer_data_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#container_data_clause.
PlSqlParserListener.prototype.exitContainer_data_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#administer_key_management.
PlSqlParserListener.prototype.enterAdminister_key_management = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#administer_key_management.
PlSqlParserListener.prototype.exitAdminister_key_management = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#keystore_management_clauses.
PlSqlParserListener.prototype.enterKeystore_management_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#keystore_management_clauses.
PlSqlParserListener.prototype.exitKeystore_management_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_keystore.
PlSqlParserListener.prototype.enterCreate_keystore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_keystore.
PlSqlParserListener.prototype.exitCreate_keystore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#open_keystore.
PlSqlParserListener.prototype.enterOpen_keystore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#open_keystore.
PlSqlParserListener.prototype.exitOpen_keystore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#force_keystore.
PlSqlParserListener.prototype.enterForce_keystore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#force_keystore.
PlSqlParserListener.prototype.exitForce_keystore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#close_keystore.
PlSqlParserListener.prototype.enterClose_keystore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#close_keystore.
PlSqlParserListener.prototype.exitClose_keystore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#backup_keystore.
PlSqlParserListener.prototype.enterBackup_keystore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#backup_keystore.
PlSqlParserListener.prototype.exitBackup_keystore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_keystore_password.
PlSqlParserListener.prototype.enterAlter_keystore_password = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_keystore_password.
PlSqlParserListener.prototype.exitAlter_keystore_password = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_into_new_keystore.
PlSqlParserListener.prototype.enterMerge_into_new_keystore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_into_new_keystore.
PlSqlParserListener.prototype.exitMerge_into_new_keystore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_into_existing_keystore.
PlSqlParserListener.prototype.enterMerge_into_existing_keystore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_into_existing_keystore.
PlSqlParserListener.prototype.exitMerge_into_existing_keystore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#isolate_keystore.
PlSqlParserListener.prototype.enterIsolate_keystore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#isolate_keystore.
PlSqlParserListener.prototype.exitIsolate_keystore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unite_keystore.
PlSqlParserListener.prototype.enterUnite_keystore = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unite_keystore.
PlSqlParserListener.prototype.exitUnite_keystore = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#key_management_clauses.
PlSqlParserListener.prototype.enterKey_management_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#key_management_clauses.
PlSqlParserListener.prototype.exitKey_management_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_key.
PlSqlParserListener.prototype.enterSet_key = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_key.
PlSqlParserListener.prototype.exitSet_key = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_key.
PlSqlParserListener.prototype.enterCreate_key = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_key.
PlSqlParserListener.prototype.exitCreate_key = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#mkid.
PlSqlParserListener.prototype.enterMkid = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#mkid.
PlSqlParserListener.prototype.exitMkid = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#mk.
PlSqlParserListener.prototype.enterMk = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#mk.
PlSqlParserListener.prototype.exitMk = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#use_key.
PlSqlParserListener.prototype.enterUse_key = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#use_key.
PlSqlParserListener.prototype.exitUse_key = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_key_tag.
PlSqlParserListener.prototype.enterSet_key_tag = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_key_tag.
PlSqlParserListener.prototype.exitSet_key_tag = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#export_keys.
PlSqlParserListener.prototype.enterExport_keys = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#export_keys.
PlSqlParserListener.prototype.exitExport_keys = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#import_keys.
PlSqlParserListener.prototype.enterImport_keys = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#import_keys.
PlSqlParserListener.prototype.exitImport_keys = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#migrate_keys.
PlSqlParserListener.prototype.enterMigrate_keys = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#migrate_keys.
PlSqlParserListener.prototype.exitMigrate_keys = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reverse_migrate_keys.
PlSqlParserListener.prototype.enterReverse_migrate_keys = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reverse_migrate_keys.
PlSqlParserListener.prototype.exitReverse_migrate_keys = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#move_keys.
PlSqlParserListener.prototype.enterMove_keys = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#move_keys.
PlSqlParserListener.prototype.exitMove_keys = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identified_by_store.
PlSqlParserListener.prototype.enterIdentified_by_store = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identified_by_store.
PlSqlParserListener.prototype.exitIdentified_by_store = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_algorithm_clause.
PlSqlParserListener.prototype.enterUsing_algorithm_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_algorithm_clause.
PlSqlParserListener.prototype.exitUsing_algorithm_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_tag_clause.
PlSqlParserListener.prototype.enterUsing_tag_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_tag_clause.
PlSqlParserListener.prototype.exitUsing_tag_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#secret_management_clauses.
PlSqlParserListener.prototype.enterSecret_management_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#secret_management_clauses.
PlSqlParserListener.prototype.exitSecret_management_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_update_secret.
PlSqlParserListener.prototype.enterAdd_update_secret = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_update_secret.
PlSqlParserListener.prototype.exitAdd_update_secret = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#delete_secret.
PlSqlParserListener.prototype.enterDelete_secret = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#delete_secret.
PlSqlParserListener.prototype.exitDelete_secret = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_update_secret_seps.
PlSqlParserListener.prototype.enterAdd_update_secret_seps = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_update_secret_seps.
PlSqlParserListener.prototype.exitAdd_update_secret_seps = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#delete_secret_seps.
PlSqlParserListener.prototype.enterDelete_secret_seps = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#delete_secret_seps.
PlSqlParserListener.prototype.exitDelete_secret_seps = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#zero_downtime_software_patching_clauses.
PlSqlParserListener.prototype.enterZero_downtime_software_patching_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#zero_downtime_software_patching_clauses.
PlSqlParserListener.prototype.exitZero_downtime_software_patching_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#with_backup_clause.
PlSqlParserListener.prototype.enterWith_backup_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#with_backup_clause.
PlSqlParserListener.prototype.exitWith_backup_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identified_by_password_clause.
PlSqlParserListener.prototype.enterIdentified_by_password_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identified_by_password_clause.
PlSqlParserListener.prototype.exitIdentified_by_password_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#keystore_password.
PlSqlParserListener.prototype.enterKeystore_password = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#keystore_password.
PlSqlParserListener.prototype.exitKeystore_password = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#path.
PlSqlParserListener.prototype.enterPath = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#path.
PlSqlParserListener.prototype.exitPath = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#secret.
PlSqlParserListener.prototype.enterSecret = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#secret.
PlSqlParserListener.prototype.exitSecret = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#analyze.
PlSqlParserListener.prototype.enterAnalyze = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#analyze.
PlSqlParserListener.prototype.exitAnalyze = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_extention_clause.
PlSqlParserListener.prototype.enterPartition_extention_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_extention_clause.
PlSqlParserListener.prototype.exitPartition_extention_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#validation_clauses.
PlSqlParserListener.prototype.enterValidation_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#validation_clauses.
PlSqlParserListener.prototype.exitValidation_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compute_clauses.
PlSqlParserListener.prototype.enterCompute_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compute_clauses.
PlSqlParserListener.prototype.exitCompute_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_clause.
PlSqlParserListener.prototype.enterFor_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_clause.
PlSqlParserListener.prototype.exitFor_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#online_or_offline.
PlSqlParserListener.prototype.enterOnline_or_offline = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#online_or_offline.
PlSqlParserListener.prototype.exitOnline_or_offline = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#into_clause1.
PlSqlParserListener.prototype.enterInto_clause1 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#into_clause1.
PlSqlParserListener.prototype.exitInto_clause1 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_key_value.
PlSqlParserListener.prototype.enterPartition_key_value = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_key_value.
PlSqlParserListener.prototype.exitPartition_key_value = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_key_value.
PlSqlParserListener.prototype.enterSubpartition_key_value = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_key_value.
PlSqlParserListener.prototype.exitSubpartition_key_value = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#associate_statistics.
PlSqlParserListener.prototype.enterAssociate_statistics = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#associate_statistics.
PlSqlParserListener.prototype.exitAssociate_statistics = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_association.
PlSqlParserListener.prototype.enterColumn_association = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_association.
PlSqlParserListener.prototype.exitColumn_association = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_association.
PlSqlParserListener.prototype.enterFunction_association = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_association.
PlSqlParserListener.prototype.exitFunction_association = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#indextype_name.
PlSqlParserListener.prototype.enterIndextype_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#indextype_name.
PlSqlParserListener.prototype.exitIndextype_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_statistics_type.
PlSqlParserListener.prototype.enterUsing_statistics_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_statistics_type.
PlSqlParserListener.prototype.exitUsing_statistics_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#statistics_type_name.
PlSqlParserListener.prototype.enterStatistics_type_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#statistics_type_name.
PlSqlParserListener.prototype.exitStatistics_type_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_cost_clause.
PlSqlParserListener.prototype.enterDefault_cost_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_cost_clause.
PlSqlParserListener.prototype.exitDefault_cost_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cpu_cost.
PlSqlParserListener.prototype.enterCpu_cost = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cpu_cost.
PlSqlParserListener.prototype.exitCpu_cost = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#io_cost.
PlSqlParserListener.prototype.enterIo_cost = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#io_cost.
PlSqlParserListener.prototype.exitIo_cost = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#network_cost.
PlSqlParserListener.prototype.enterNetwork_cost = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#network_cost.
PlSqlParserListener.prototype.exitNetwork_cost = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_selectivity_clause.
PlSqlParserListener.prototype.enterDefault_selectivity_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_selectivity_clause.
PlSqlParserListener.prototype.exitDefault_selectivity_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_selectivity.
PlSqlParserListener.prototype.enterDefault_selectivity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_selectivity.
PlSqlParserListener.prototype.exitDefault_selectivity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#storage_table_clause.
PlSqlParserListener.prototype.enterStorage_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#storage_table_clause.
PlSqlParserListener.prototype.exitStorage_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unified_auditing.
PlSqlParserListener.prototype.enterUnified_auditing = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unified_auditing.
PlSqlParserListener.prototype.exitUnified_auditing = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#policy_name.
PlSqlParserListener.prototype.enterPolicy_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#policy_name.
PlSqlParserListener.prototype.exitPolicy_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_traditional.
PlSqlParserListener.prototype.enterAudit_traditional = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_traditional.
PlSqlParserListener.prototype.exitAudit_traditional = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_direct_path.
PlSqlParserListener.prototype.enterAudit_direct_path = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_direct_path.
PlSqlParserListener.prototype.exitAudit_direct_path = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_container_clause.
PlSqlParserListener.prototype.enterAudit_container_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_container_clause.
PlSqlParserListener.prototype.exitAudit_container_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_operation_clause.
PlSqlParserListener.prototype.enterAudit_operation_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_operation_clause.
PlSqlParserListener.prototype.exitAudit_operation_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#auditing_by_clause.
PlSqlParserListener.prototype.enterAuditing_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#auditing_by_clause.
PlSqlParserListener.prototype.exitAuditing_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_user.
PlSqlParserListener.prototype.enterAudit_user = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_user.
PlSqlParserListener.prototype.exitAudit_user = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#audit_schema_object_clause.
PlSqlParserListener.prototype.enterAudit_schema_object_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#audit_schema_object_clause.
PlSqlParserListener.prototype.exitAudit_schema_object_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_operation.
PlSqlParserListener.prototype.enterSql_operation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_operation.
PlSqlParserListener.prototype.exitSql_operation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#auditing_on_clause.
PlSqlParserListener.prototype.enterAuditing_on_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#auditing_on_clause.
PlSqlParserListener.prototype.exitAuditing_on_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_name.
PlSqlParserListener.prototype.enterModel_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_name.
PlSqlParserListener.prototype.exitModel_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_name.
PlSqlParserListener.prototype.enterObject_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_name.
PlSqlParserListener.prototype.exitObject_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#profile_name.
PlSqlParserListener.prototype.enterProfile_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#profile_name.
PlSqlParserListener.prototype.exitProfile_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_statement_shortcut.
PlSqlParserListener.prototype.enterSql_statement_shortcut = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_statement_shortcut.
PlSqlParserListener.prototype.exitSql_statement_shortcut = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_index.
PlSqlParserListener.prototype.enterDrop_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_index.
PlSqlParserListener.prototype.exitDrop_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#disassociate_statistics.
PlSqlParserListener.prototype.enterDisassociate_statistics = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#disassociate_statistics.
PlSqlParserListener.prototype.exitDisassociate_statistics = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_indextype.
PlSqlParserListener.prototype.enterDrop_indextype = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_indextype.
PlSqlParserListener.prototype.exitDrop_indextype = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_inmemory_join_group.
PlSqlParserListener.prototype.enterDrop_inmemory_join_group = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_inmemory_join_group.
PlSqlParserListener.prototype.exitDrop_inmemory_join_group = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_table.
PlSqlParserListener.prototype.enterFlashback_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_table.
PlSqlParserListener.prototype.exitFlashback_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#restore_point.
PlSqlParserListener.prototype.enterRestore_point = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#restore_point.
PlSqlParserListener.prototype.exitRestore_point = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#purge_statement.
PlSqlParserListener.prototype.enterPurge_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#purge_statement.
PlSqlParserListener.prototype.exitPurge_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#noaudit_statement.
PlSqlParserListener.prototype.enterNoaudit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#noaudit_statement.
PlSqlParserListener.prototype.exitNoaudit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rename_object.
PlSqlParserListener.prototype.enterRename_object = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rename_object.
PlSqlParserListener.prototype.exitRename_object = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grant_statement.
PlSqlParserListener.prototype.enterGrant_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grant_statement.
PlSqlParserListener.prototype.exitGrant_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#container_clause.
PlSqlParserListener.prototype.enterContainer_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#container_clause.
PlSqlParserListener.prototype.exitContainer_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#revoke_statement.
PlSqlParserListener.prototype.enterRevoke_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#revoke_statement.
PlSqlParserListener.prototype.exitRevoke_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#revoke_system_privilege.
PlSqlParserListener.prototype.enterRevoke_system_privilege = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#revoke_system_privilege.
PlSqlParserListener.prototype.exitRevoke_system_privilege = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#revokee_clause.
PlSqlParserListener.prototype.enterRevokee_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#revokee_clause.
PlSqlParserListener.prototype.exitRevokee_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#revoke_object_privileges.
PlSqlParserListener.prototype.enterRevoke_object_privileges = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#revoke_object_privileges.
PlSqlParserListener.prototype.exitRevoke_object_privileges = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_object_clause.
PlSqlParserListener.prototype.enterOn_object_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_object_clause.
PlSqlParserListener.prototype.exitOn_object_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#revoke_roles_from_programs.
PlSqlParserListener.prototype.enterRevoke_roles_from_programs = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#revoke_roles_from_programs.
PlSqlParserListener.prototype.exitRevoke_roles_from_programs = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#program_unit.
PlSqlParserListener.prototype.enterProgram_unit = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#program_unit.
PlSqlParserListener.prototype.exitProgram_unit = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_dimension.
PlSqlParserListener.prototype.enterCreate_dimension = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_dimension.
PlSqlParserListener.prototype.exitCreate_dimension = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_directory.
PlSqlParserListener.prototype.enterCreate_directory = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_directory.
PlSqlParserListener.prototype.exitCreate_directory = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#directory_name.
PlSqlParserListener.prototype.enterDirectory_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#directory_name.
PlSqlParserListener.prototype.exitDirectory_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#directory_path.
PlSqlParserListener.prototype.enterDirectory_path = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#directory_path.
PlSqlParserListener.prototype.exitDirectory_path = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_inmemory_join_group.
PlSqlParserListener.prototype.enterCreate_inmemory_join_group = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_inmemory_join_group.
PlSqlParserListener.prototype.exitCreate_inmemory_join_group = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_hierarchy.
PlSqlParserListener.prototype.enterDrop_hierarchy = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_hierarchy.
PlSqlParserListener.prototype.exitDrop_hierarchy = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_library.
PlSqlParserListener.prototype.enterAlter_library = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_library.
PlSqlParserListener.prototype.exitAlter_library = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_java.
PlSqlParserListener.prototype.enterDrop_java = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_java.
PlSqlParserListener.prototype.exitDrop_java = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_library.
PlSqlParserListener.prototype.enterDrop_library = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_library.
PlSqlParserListener.prototype.exitDrop_library = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_java.
PlSqlParserListener.prototype.enterCreate_java = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_java.
PlSqlParserListener.prototype.exitCreate_java = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_library.
PlSqlParserListener.prototype.enterCreate_library = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_library.
PlSqlParserListener.prototype.exitCreate_library = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#plsql_library_source.
PlSqlParserListener.prototype.enterPlsql_library_source = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#plsql_library_source.
PlSqlParserListener.prototype.exitPlsql_library_source = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#credential_name.
PlSqlParserListener.prototype.enterCredential_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#credential_name.
PlSqlParserListener.prototype.exitCredential_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#library_editionable.
PlSqlParserListener.prototype.enterLibrary_editionable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#library_editionable.
PlSqlParserListener.prototype.exitLibrary_editionable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#library_debug.
PlSqlParserListener.prototype.enterLibrary_debug = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#library_debug.
PlSqlParserListener.prototype.exitLibrary_debug = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compiler_parameters_clause.
PlSqlParserListener.prototype.enterCompiler_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compiler_parameters_clause.
PlSqlParserListener.prototype.exitCompiler_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter_value.
PlSqlParserListener.prototype.enterParameter_value = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter_value.
PlSqlParserListener.prototype.exitParameter_value = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#library_name.
PlSqlParserListener.prototype.enterLibrary_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#library_name.
PlSqlParserListener.prototype.exitLibrary_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_dimension.
PlSqlParserListener.prototype.enterAlter_dimension = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_dimension.
PlSqlParserListener.prototype.exitAlter_dimension = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#level_clause.
PlSqlParserListener.prototype.enterLevel_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#level_clause.
PlSqlParserListener.prototype.exitLevel_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hierarchy_clause.
PlSqlParserListener.prototype.enterHierarchy_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hierarchy_clause.
PlSqlParserListener.prototype.exitHierarchy_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dimension_join_clause.
PlSqlParserListener.prototype.enterDimension_join_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dimension_join_clause.
PlSqlParserListener.prototype.exitDimension_join_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#attribute_clause.
PlSqlParserListener.prototype.enterAttribute_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#attribute_clause.
PlSqlParserListener.prototype.exitAttribute_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#extended_attribute_clause.
PlSqlParserListener.prototype.enterExtended_attribute_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#extended_attribute_clause.
PlSqlParserListener.prototype.exitExtended_attribute_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_one_or_more_sub_clause.
PlSqlParserListener.prototype.enterColumn_one_or_more_sub_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_one_or_more_sub_clause.
PlSqlParserListener.prototype.exitColumn_one_or_more_sub_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_view.
PlSqlParserListener.prototype.enterAlter_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_view.
PlSqlParserListener.prototype.exitAlter_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_view_editionable.
PlSqlParserListener.prototype.enterAlter_view_editionable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_view_editionable.
PlSqlParserListener.prototype.exitAlter_view_editionable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_view.
PlSqlParserListener.prototype.enterCreate_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_view.
PlSqlParserListener.prototype.exitCreate_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#editioning_clause.
PlSqlParserListener.prototype.enterEditioning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#editioning_clause.
PlSqlParserListener.prototype.exitEditioning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#view_options.
PlSqlParserListener.prototype.enterView_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#view_options.
PlSqlParserListener.prototype.exitView_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#view_alias_constraint.
PlSqlParserListener.prototype.enterView_alias_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#view_alias_constraint.
PlSqlParserListener.prototype.exitView_alias_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_view_clause.
PlSqlParserListener.prototype.enterObject_view_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_view_clause.
PlSqlParserListener.prototype.exitObject_view_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inline_constraint.
PlSqlParserListener.prototype.enterInline_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inline_constraint.
PlSqlParserListener.prototype.exitInline_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inline_ref_constraint.
PlSqlParserListener.prototype.enterInline_ref_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inline_ref_constraint.
PlSqlParserListener.prototype.exitInline_ref_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#out_of_line_ref_constraint.
PlSqlParserListener.prototype.enterOut_of_line_ref_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#out_of_line_ref_constraint.
PlSqlParserListener.prototype.exitOut_of_line_ref_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#out_of_line_constraint.
PlSqlParserListener.prototype.enterOut_of_line_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#out_of_line_constraint.
PlSqlParserListener.prototype.exitOut_of_line_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constraint_state.
PlSqlParserListener.prototype.enterConstraint_state = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constraint_state.
PlSqlParserListener.prototype.exitConstraint_state = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltype_view_clause.
PlSqlParserListener.prototype.enterXmltype_view_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltype_view_clause.
PlSqlParserListener.prototype.exitXmltype_view_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_schema_spec.
PlSqlParserListener.prototype.enterXml_schema_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_schema_spec.
PlSqlParserListener.prototype.exitXml_schema_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_schema_url.
PlSqlParserListener.prototype.enterXml_schema_url = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_schema_url.
PlSqlParserListener.prototype.exitXml_schema_url = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#element.
PlSqlParserListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#element.
PlSqlParserListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_tablespace.
PlSqlParserListener.prototype.enterAlter_tablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_tablespace.
PlSqlParserListener.prototype.exitAlter_tablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datafile_tempfile_clauses.
PlSqlParserListener.prototype.enterDatafile_tempfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datafile_tempfile_clauses.
PlSqlParserListener.prototype.exitDatafile_tempfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_logging_clauses.
PlSqlParserListener.prototype.enterTablespace_logging_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_logging_clauses.
PlSqlParserListener.prototype.exitTablespace_logging_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_group_clause.
PlSqlParserListener.prototype.enterTablespace_group_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_group_clause.
PlSqlParserListener.prototype.exitTablespace_group_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_group_name.
PlSqlParserListener.prototype.enterTablespace_group_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_group_name.
PlSqlParserListener.prototype.exitTablespace_group_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_state_clauses.
PlSqlParserListener.prototype.enterTablespace_state_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_state_clauses.
PlSqlParserListener.prototype.exitTablespace_state_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_mode_clause.
PlSqlParserListener.prototype.enterFlashback_mode_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_mode_clause.
PlSqlParserListener.prototype.exitFlashback_mode_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_tablespace_name.
PlSqlParserListener.prototype.enterNew_tablespace_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_tablespace_name.
PlSqlParserListener.prototype.exitNew_tablespace_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_tablespace.
PlSqlParserListener.prototype.enterCreate_tablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_tablespace.
PlSqlParserListener.prototype.exitCreate_tablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#permanent_tablespace_clause.
PlSqlParserListener.prototype.enterPermanent_tablespace_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#permanent_tablespace_clause.
PlSqlParserListener.prototype.exitPermanent_tablespace_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_encryption_spec.
PlSqlParserListener.prototype.enterTablespace_encryption_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_encryption_spec.
PlSqlParserListener.prototype.exitTablespace_encryption_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logging_clause.
PlSqlParserListener.prototype.enterLogging_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logging_clause.
PlSqlParserListener.prototype.exitLogging_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#extent_management_clause.
PlSqlParserListener.prototype.enterExtent_management_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#extent_management_clause.
PlSqlParserListener.prototype.exitExtent_management_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#segment_management_clause.
PlSqlParserListener.prototype.enterSegment_management_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#segment_management_clause.
PlSqlParserListener.prototype.exitSegment_management_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#temporary_tablespace_clause.
PlSqlParserListener.prototype.enterTemporary_tablespace_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#temporary_tablespace_clause.
PlSqlParserListener.prototype.exitTemporary_tablespace_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#undo_tablespace_clause.
PlSqlParserListener.prototype.enterUndo_tablespace_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#undo_tablespace_clause.
PlSqlParserListener.prototype.exitUndo_tablespace_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_retention_clause.
PlSqlParserListener.prototype.enterTablespace_retention_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_retention_clause.
PlSqlParserListener.prototype.exitTablespace_retention_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_tablespace_set.
PlSqlParserListener.prototype.enterCreate_tablespace_set = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_tablespace_set.
PlSqlParserListener.prototype.exitCreate_tablespace_set = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#permanent_tablespace_attrs.
PlSqlParserListener.prototype.enterPermanent_tablespace_attrs = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#permanent_tablespace_attrs.
PlSqlParserListener.prototype.exitPermanent_tablespace_attrs = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_encryption_clause.
PlSqlParserListener.prototype.enterTablespace_encryption_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_encryption_clause.
PlSqlParserListener.prototype.exitTablespace_encryption_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_tablespace_params.
PlSqlParserListener.prototype.enterDefault_tablespace_params = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_tablespace_params.
PlSqlParserListener.prototype.exitDefault_tablespace_params = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_table_compression.
PlSqlParserListener.prototype.enterDefault_table_compression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_table_compression.
PlSqlParserListener.prototype.exitDefault_table_compression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#low_high.
PlSqlParserListener.prototype.enterLow_high = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#low_high.
PlSqlParserListener.prototype.exitLow_high = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_index_compression.
PlSqlParserListener.prototype.enterDefault_index_compression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_index_compression.
PlSqlParserListener.prototype.exitDefault_index_compression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inmmemory_clause.
PlSqlParserListener.prototype.enterInmmemory_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inmmemory_clause.
PlSqlParserListener.prototype.exitInmmemory_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datafile_specification.
PlSqlParserListener.prototype.enterDatafile_specification = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datafile_specification.
PlSqlParserListener.prototype.exitDatafile_specification = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tempfile_specification.
PlSqlParserListener.prototype.enterTempfile_specification = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tempfile_specification.
PlSqlParserListener.prototype.exitTempfile_specification = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datafile_tempfile_spec.
PlSqlParserListener.prototype.enterDatafile_tempfile_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datafile_tempfile_spec.
PlSqlParserListener.prototype.exitDatafile_tempfile_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#redo_log_file_spec.
PlSqlParserListener.prototype.enterRedo_log_file_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#redo_log_file_spec.
PlSqlParserListener.prototype.exitRedo_log_file_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#autoextend_clause.
PlSqlParserListener.prototype.enterAutoextend_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#autoextend_clause.
PlSqlParserListener.prototype.exitAutoextend_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#maxsize_clause.
PlSqlParserListener.prototype.enterMaxsize_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#maxsize_clause.
PlSqlParserListener.prototype.exitMaxsize_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#build_clause.
PlSqlParserListener.prototype.enterBuild_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#build_clause.
PlSqlParserListener.prototype.exitBuild_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parallel_clause.
PlSqlParserListener.prototype.enterParallel_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parallel_clause.
PlSqlParserListener.prototype.exitParallel_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_materialized_view.
PlSqlParserListener.prototype.enterAlter_materialized_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_materialized_view.
PlSqlParserListener.prototype.exitAlter_materialized_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_mv_option1.
PlSqlParserListener.prototype.enterAlter_mv_option1 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_mv_option1.
PlSqlParserListener.prototype.exitAlter_mv_option1 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_mv_refresh.
PlSqlParserListener.prototype.enterAlter_mv_refresh = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_mv_refresh.
PlSqlParserListener.prototype.exitAlter_mv_refresh = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollback_segment.
PlSqlParserListener.prototype.enterRollback_segment = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollback_segment.
PlSqlParserListener.prototype.exitRollback_segment = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_mv_column_clause.
PlSqlParserListener.prototype.enterModify_mv_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_mv_column_clause.
PlSqlParserListener.prototype.exitModify_mv_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_materialized_view_log.
PlSqlParserListener.prototype.enterAlter_materialized_view_log = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_materialized_view_log.
PlSqlParserListener.prototype.exitAlter_materialized_view_log = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_mv_log_column_clause.
PlSqlParserListener.prototype.enterAdd_mv_log_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_mv_log_column_clause.
PlSqlParserListener.prototype.exitAdd_mv_log_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#move_mv_log_clause.
PlSqlParserListener.prototype.enterMove_mv_log_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#move_mv_log_clause.
PlSqlParserListener.prototype.exitMove_mv_log_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#mv_log_augmentation.
PlSqlParserListener.prototype.enterMv_log_augmentation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#mv_log_augmentation.
PlSqlParserListener.prototype.exitMv_log_augmentation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datetime_expr.
PlSqlParserListener.prototype.enterDatetime_expr = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datetime_expr.
PlSqlParserListener.prototype.exitDatetime_expr = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#interval_expr.
PlSqlParserListener.prototype.enterInterval_expr = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#interval_expr.
PlSqlParserListener.prototype.exitInterval_expr = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#synchronous_or_asynchronous.
PlSqlParserListener.prototype.enterSynchronous_or_asynchronous = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#synchronous_or_asynchronous.
PlSqlParserListener.prototype.exitSynchronous_or_asynchronous = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#including_or_excluding.
PlSqlParserListener.prototype.enterIncluding_or_excluding = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#including_or_excluding.
PlSqlParserListener.prototype.exitIncluding_or_excluding = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_materialized_view_log.
PlSqlParserListener.prototype.enterCreate_materialized_view_log = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_materialized_view_log.
PlSqlParserListener.prototype.exitCreate_materialized_view_log = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_values_clause.
PlSqlParserListener.prototype.enterNew_values_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_values_clause.
PlSqlParserListener.prototype.exitNew_values_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#mv_log_purge_clause.
PlSqlParserListener.prototype.enterMv_log_purge_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#mv_log_purge_clause.
PlSqlParserListener.prototype.exitMv_log_purge_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_materialized_zonemap.
PlSqlParserListener.prototype.enterCreate_materialized_zonemap = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_materialized_zonemap.
PlSqlParserListener.prototype.exitCreate_materialized_zonemap = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_materialized_zonemap.
PlSqlParserListener.prototype.enterAlter_materialized_zonemap = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_materialized_zonemap.
PlSqlParserListener.prototype.exitAlter_materialized_zonemap = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_materialized_zonemap.
PlSqlParserListener.prototype.enterDrop_materialized_zonemap = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_materialized_zonemap.
PlSqlParserListener.prototype.exitDrop_materialized_zonemap = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#zonemap_refresh_clause.
PlSqlParserListener.prototype.enterZonemap_refresh_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#zonemap_refresh_clause.
PlSqlParserListener.prototype.exitZonemap_refresh_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#zonemap_attributes.
PlSqlParserListener.prototype.enterZonemap_attributes = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#zonemap_attributes.
PlSqlParserListener.prototype.exitZonemap_attributes = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#zonemap_name.
PlSqlParserListener.prototype.enterZonemap_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#zonemap_name.
PlSqlParserListener.prototype.exitZonemap_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#operator_name.
PlSqlParserListener.prototype.enterOperator_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#operator_name.
PlSqlParserListener.prototype.exitOperator_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#operator_function_name.
PlSqlParserListener.prototype.enterOperator_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#operator_function_name.
PlSqlParserListener.prototype.exitOperator_function_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_zonemap_on_table.
PlSqlParserListener.prototype.enterCreate_zonemap_on_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_zonemap_on_table.
PlSqlParserListener.prototype.exitCreate_zonemap_on_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_zonemap_as_subquery.
PlSqlParserListener.prototype.enterCreate_zonemap_as_subquery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_zonemap_as_subquery.
PlSqlParserListener.prototype.exitCreate_zonemap_as_subquery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_operator.
PlSqlParserListener.prototype.enterAlter_operator = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_operator.
PlSqlParserListener.prototype.exitAlter_operator = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_operator.
PlSqlParserListener.prototype.enterDrop_operator = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_operator.
PlSqlParserListener.prototype.exitDrop_operator = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_operator.
PlSqlParserListener.prototype.enterCreate_operator = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_operator.
PlSqlParserListener.prototype.exitCreate_operator = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#binding_clause.
PlSqlParserListener.prototype.enterBinding_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#binding_clause.
PlSqlParserListener.prototype.exitBinding_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_binding_clause.
PlSqlParserListener.prototype.enterAdd_binding_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_binding_clause.
PlSqlParserListener.prototype.exitAdd_binding_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#implementation_clause.
PlSqlParserListener.prototype.enterImplementation_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#implementation_clause.
PlSqlParserListener.prototype.exitImplementation_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#primary_operator_list.
PlSqlParserListener.prototype.enterPrimary_operator_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#primary_operator_list.
PlSqlParserListener.prototype.exitPrimary_operator_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#primary_operator_item.
PlSqlParserListener.prototype.enterPrimary_operator_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#primary_operator_item.
PlSqlParserListener.prototype.exitPrimary_operator_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#operator_context_clause.
PlSqlParserListener.prototype.enterOperator_context_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#operator_context_clause.
PlSqlParserListener.prototype.exitOperator_context_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_function_clause.
PlSqlParserListener.prototype.enterUsing_function_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_function_clause.
PlSqlParserListener.prototype.exitUsing_function_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_binding_clause.
PlSqlParserListener.prototype.enterDrop_binding_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_binding_clause.
PlSqlParserListener.prototype.exitDrop_binding_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_materialized_view.
PlSqlParserListener.prototype.enterCreate_materialized_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_materialized_view.
PlSqlParserListener.prototype.exitCreate_materialized_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#scoped_table_ref_constraint.
PlSqlParserListener.prototype.enterScoped_table_ref_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#scoped_table_ref_constraint.
PlSqlParserListener.prototype.exitScoped_table_ref_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#mv_column_alias.
PlSqlParserListener.prototype.enterMv_column_alias = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#mv_column_alias.
PlSqlParserListener.prototype.exitMv_column_alias = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_mv_refresh.
PlSqlParserListener.prototype.enterCreate_mv_refresh = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_mv_refresh.
PlSqlParserListener.prototype.exitCreate_mv_refresh = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_materialized_view.
PlSqlParserListener.prototype.enterDrop_materialized_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_materialized_view.
PlSqlParserListener.prototype.exitDrop_materialized_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_context.
PlSqlParserListener.prototype.enterCreate_context = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_context.
PlSqlParserListener.prototype.exitCreate_context = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#oracle_namespace.
PlSqlParserListener.prototype.enterOracle_namespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#oracle_namespace.
PlSqlParserListener.prototype.exitOracle_namespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_cluster.
PlSqlParserListener.prototype.enterCreate_cluster = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_cluster.
PlSqlParserListener.prototype.exitCreate_cluster = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_profile.
PlSqlParserListener.prototype.enterCreate_profile = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_profile.
PlSqlParserListener.prototype.exitCreate_profile = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#resource_parameters.
PlSqlParserListener.prototype.enterResource_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#resource_parameters.
PlSqlParserListener.prototype.exitResource_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#password_parameters.
PlSqlParserListener.prototype.enterPassword_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#password_parameters.
PlSqlParserListener.prototype.exitPassword_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_lockdown_profile.
PlSqlParserListener.prototype.enterCreate_lockdown_profile = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_lockdown_profile.
PlSqlParserListener.prototype.exitCreate_lockdown_profile = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#static_base_profile.
PlSqlParserListener.prototype.enterStatic_base_profile = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#static_base_profile.
PlSqlParserListener.prototype.exitStatic_base_profile = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dynamic_base_profile.
PlSqlParserListener.prototype.enterDynamic_base_profile = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dynamic_base_profile.
PlSqlParserListener.prototype.exitDynamic_base_profile = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_outline.
PlSqlParserListener.prototype.enterCreate_outline = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_outline.
PlSqlParserListener.prototype.exitCreate_outline = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_restore_point.
PlSqlParserListener.prototype.enterCreate_restore_point = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_restore_point.
PlSqlParserListener.prototype.exitCreate_restore_point = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_role.
PlSqlParserListener.prototype.enterCreate_role = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_role.
PlSqlParserListener.prototype.exitCreate_role = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_table.
PlSqlParserListener.prototype.enterCreate_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_table.
PlSqlParserListener.prototype.exitCreate_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltype_table.
PlSqlParserListener.prototype.enterXmltype_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltype_table.
PlSqlParserListener.prototype.exitXmltype_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltype_virtual_columns.
PlSqlParserListener.prototype.enterXmltype_virtual_columns = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltype_virtual_columns.
PlSqlParserListener.prototype.exitXmltype_virtual_columns = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltype_column_properties.
PlSqlParserListener.prototype.enterXmltype_column_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltype_column_properties.
PlSqlParserListener.prototype.exitXmltype_column_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltype_storage.
PlSqlParserListener.prototype.enterXmltype_storage = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltype_storage.
PlSqlParserListener.prototype.exitXmltype_storage = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlschema_spec.
PlSqlParserListener.prototype.enterXmlschema_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlschema_spec.
PlSqlParserListener.prototype.exitXmlschema_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_table.
PlSqlParserListener.prototype.enterObject_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_table.
PlSqlParserListener.prototype.exitObject_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_type.
PlSqlParserListener.prototype.enterObject_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_type.
PlSqlParserListener.prototype.exitObject_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#oid_index_clause.
PlSqlParserListener.prototype.enterOid_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#oid_index_clause.
PlSqlParserListener.prototype.exitOid_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#oid_clause.
PlSqlParserListener.prototype.enterOid_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#oid_clause.
PlSqlParserListener.prototype.exitOid_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_properties.
PlSqlParserListener.prototype.enterObject_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_properties.
PlSqlParserListener.prototype.exitObject_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_table_substitution.
PlSqlParserListener.prototype.enterObject_table_substitution = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_table_substitution.
PlSqlParserListener.prototype.exitObject_table_substitution = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_table.
PlSqlParserListener.prototype.enterRelational_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_table.
PlSqlParserListener.prototype.exitRelational_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#immutable_table_clauses.
PlSqlParserListener.prototype.enterImmutable_table_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#immutable_table_clauses.
PlSqlParserListener.prototype.exitImmutable_table_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#immutable_table_no_drop_clause.
PlSqlParserListener.prototype.enterImmutable_table_no_drop_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#immutable_table_no_drop_clause.
PlSqlParserListener.prototype.exitImmutable_table_no_drop_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#immutable_table_no_delete_clause.
PlSqlParserListener.prototype.enterImmutable_table_no_delete_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#immutable_table_no_delete_clause.
PlSqlParserListener.prototype.exitImmutable_table_no_delete_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#blockchain_table_clauses.
PlSqlParserListener.prototype.enterBlockchain_table_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#blockchain_table_clauses.
PlSqlParserListener.prototype.exitBlockchain_table_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#blockchain_drop_table_clause.
PlSqlParserListener.prototype.enterBlockchain_drop_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#blockchain_drop_table_clause.
PlSqlParserListener.prototype.exitBlockchain_drop_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#blockchain_row_retention_clause.
PlSqlParserListener.prototype.enterBlockchain_row_retention_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#blockchain_row_retention_clause.
PlSqlParserListener.prototype.exitBlockchain_row_retention_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#blockchain_hash_and_data_format_clause.
PlSqlParserListener.prototype.enterBlockchain_hash_and_data_format_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#blockchain_hash_and_data_format_clause.
PlSqlParserListener.prototype.exitBlockchain_hash_and_data_format_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#collation_name.
PlSqlParserListener.prototype.enterCollation_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#collation_name.
PlSqlParserListener.prototype.exitCollation_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_properties.
PlSqlParserListener.prototype.enterTable_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_properties.
PlSqlParserListener.prototype.exitTable_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#read_only_clause.
PlSqlParserListener.prototype.enterRead_only_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#read_only_clause.
PlSqlParserListener.prototype.exitRead_only_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#indexing_clause.
PlSqlParserListener.prototype.enterIndexing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#indexing_clause.
PlSqlParserListener.prototype.exitIndexing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#attribute_clustering_clause.
PlSqlParserListener.prototype.enterAttribute_clustering_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#attribute_clustering_clause.
PlSqlParserListener.prototype.exitAttribute_clustering_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#clustering_join.
PlSqlParserListener.prototype.enterClustering_join = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#clustering_join.
PlSqlParserListener.prototype.exitClustering_join = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#clustering_join_item.
PlSqlParserListener.prototype.enterClustering_join_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#clustering_join_item.
PlSqlParserListener.prototype.exitClustering_join_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#equijoin_condition.
PlSqlParserListener.prototype.enterEquijoin_condition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#equijoin_condition.
PlSqlParserListener.prototype.exitEquijoin_condition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cluster_clause.
PlSqlParserListener.prototype.enterCluster_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cluster_clause.
PlSqlParserListener.prototype.exitCluster_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#clustering_columns.
PlSqlParserListener.prototype.enterClustering_columns = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#clustering_columns.
PlSqlParserListener.prototype.exitClustering_columns = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#clustering_column_group.
PlSqlParserListener.prototype.enterClustering_column_group = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#clustering_column_group.
PlSqlParserListener.prototype.exitClustering_column_group = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#yes_no.
PlSqlParserListener.prototype.enterYes_no = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#yes_no.
PlSqlParserListener.prototype.exitYes_no = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#zonemap_clause.
PlSqlParserListener.prototype.enterZonemap_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#zonemap_clause.
PlSqlParserListener.prototype.exitZonemap_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logical_replication_clause.
PlSqlParserListener.prototype.enterLogical_replication_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logical_replication_clause.
PlSqlParserListener.prototype.exitLogical_replication_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_name.
PlSqlParserListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_name.
PlSqlParserListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_property.
PlSqlParserListener.prototype.enterRelational_property = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_property.
PlSqlParserListener.prototype.exitRelational_property = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_partitioning_clauses.
PlSqlParserListener.prototype.enterTable_partitioning_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_partitioning_clauses.
PlSqlParserListener.prototype.exitTable_partitioning_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#range_partitions.
PlSqlParserListener.prototype.enterRange_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#range_partitions.
PlSqlParserListener.prototype.exitRange_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#list_partitions.
PlSqlParserListener.prototype.enterList_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#list_partitions.
PlSqlParserListener.prototype.exitList_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_partitions.
PlSqlParserListener.prototype.enterHash_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_partitions.
PlSqlParserListener.prototype.exitHash_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#individual_hash_partitions.
PlSqlParserListener.prototype.enterIndividual_hash_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#individual_hash_partitions.
PlSqlParserListener.prototype.exitIndividual_hash_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_partitions_by_quantity.
PlSqlParserListener.prototype.enterHash_partitions_by_quantity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_partitions_by_quantity.
PlSqlParserListener.prototype.exitHash_partitions_by_quantity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_partition_quantity.
PlSqlParserListener.prototype.enterHash_partition_quantity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_partition_quantity.
PlSqlParserListener.prototype.exitHash_partition_quantity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#composite_range_partitions.
PlSqlParserListener.prototype.enterComposite_range_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#composite_range_partitions.
PlSqlParserListener.prototype.exitComposite_range_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#composite_list_partitions.
PlSqlParserListener.prototype.enterComposite_list_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#composite_list_partitions.
PlSqlParserListener.prototype.exitComposite_list_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#composite_hash_partitions.
PlSqlParserListener.prototype.enterComposite_hash_partitions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#composite_hash_partitions.
PlSqlParserListener.prototype.exitComposite_hash_partitions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_partitioning.
PlSqlParserListener.prototype.enterReference_partitioning = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_partitioning.
PlSqlParserListener.prototype.exitReference_partitioning = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_partition_desc.
PlSqlParserListener.prototype.enterReference_partition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_partition_desc.
PlSqlParserListener.prototype.exitReference_partition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#system_partitioning.
PlSqlParserListener.prototype.enterSystem_partitioning = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#system_partitioning.
PlSqlParserListener.prototype.exitSystem_partitioning = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#range_partition_desc.
PlSqlParserListener.prototype.enterRange_partition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#range_partition_desc.
PlSqlParserListener.prototype.exitRange_partition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#list_partition_desc.
PlSqlParserListener.prototype.enterList_partition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#list_partition_desc.
PlSqlParserListener.prototype.exitList_partition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_template.
PlSqlParserListener.prototype.enterSubpartition_template = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_template.
PlSqlParserListener.prototype.exitSubpartition_template = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_subpartition_quantity.
PlSqlParserListener.prototype.enterHash_subpartition_quantity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_subpartition_quantity.
PlSqlParserListener.prototype.exitHash_subpartition_quantity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_by_range.
PlSqlParserListener.prototype.enterSubpartition_by_range = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_by_range.
PlSqlParserListener.prototype.exitSubpartition_by_range = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_by_list.
PlSqlParserListener.prototype.enterSubpartition_by_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_by_list.
PlSqlParserListener.prototype.exitSubpartition_by_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_by_hash.
PlSqlParserListener.prototype.enterSubpartition_by_hash = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_by_hash.
PlSqlParserListener.prototype.exitSubpartition_by_hash = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_name.
PlSqlParserListener.prototype.enterSubpartition_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_name.
PlSqlParserListener.prototype.exitSubpartition_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#range_subpartition_desc.
PlSqlParserListener.prototype.enterRange_subpartition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#range_subpartition_desc.
PlSqlParserListener.prototype.exitRange_subpartition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#list_subpartition_desc.
PlSqlParserListener.prototype.enterList_subpartition_desc = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#list_subpartition_desc.
PlSqlParserListener.prototype.exitList_subpartition_desc = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#individual_hash_subparts.
PlSqlParserListener.prototype.enterIndividual_hash_subparts = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#individual_hash_subparts.
PlSqlParserListener.prototype.exitIndividual_hash_subparts = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hash_subparts_by_quantity.
PlSqlParserListener.prototype.enterHash_subparts_by_quantity = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hash_subparts_by_quantity.
PlSqlParserListener.prototype.exitHash_subparts_by_quantity = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#range_values_clause.
PlSqlParserListener.prototype.enterRange_values_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#range_values_clause.
PlSqlParserListener.prototype.exitRange_values_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#list_values_clause.
PlSqlParserListener.prototype.enterList_values_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#list_values_clause.
PlSqlParserListener.prototype.exitList_values_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_partition_description.
PlSqlParserListener.prototype.enterTable_partition_description = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_partition_description.
PlSqlParserListener.prototype.exitTable_partition_description = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partitioning_storage_clause.
PlSqlParserListener.prototype.enterPartitioning_storage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partitioning_storage_clause.
PlSqlParserListener.prototype.exitPartitioning_storage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_partitioning_storage.
PlSqlParserListener.prototype.enterLob_partitioning_storage = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_partitioning_storage.
PlSqlParserListener.prototype.exitLob_partitioning_storage = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datatype_null_enable.
PlSqlParserListener.prototype.enterDatatype_null_enable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datatype_null_enable.
PlSqlParserListener.prototype.exitDatatype_null_enable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#size_clause.
PlSqlParserListener.prototype.enterSize_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#size_clause.
PlSqlParserListener.prototype.exitSize_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_compression.
PlSqlParserListener.prototype.enterTable_compression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_compression.
PlSqlParserListener.prototype.exitTable_compression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inmemory_table_clause.
PlSqlParserListener.prototype.enterInmemory_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inmemory_table_clause.
PlSqlParserListener.prototype.exitInmemory_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inmemory_attributes.
PlSqlParserListener.prototype.enterInmemory_attributes = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inmemory_attributes.
PlSqlParserListener.prototype.exitInmemory_attributes = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inmemory_memcompress.
PlSqlParserListener.prototype.enterInmemory_memcompress = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inmemory_memcompress.
PlSqlParserListener.prototype.exitInmemory_memcompress = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inmemory_priority.
PlSqlParserListener.prototype.enterInmemory_priority = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inmemory_priority.
PlSqlParserListener.prototype.exitInmemory_priority = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inmemory_distribute.
PlSqlParserListener.prototype.enterInmemory_distribute = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inmemory_distribute.
PlSqlParserListener.prototype.exitInmemory_distribute = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inmemory_duplicate.
PlSqlParserListener.prototype.enterInmemory_duplicate = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inmemory_duplicate.
PlSqlParserListener.prototype.exitInmemory_duplicate = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#inmemory_column_clause.
PlSqlParserListener.prototype.enterInmemory_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#inmemory_column_clause.
PlSqlParserListener.prototype.exitInmemory_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#physical_attributes_clause.
PlSqlParserListener.prototype.enterPhysical_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#physical_attributes_clause.
PlSqlParserListener.prototype.exitPhysical_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#storage_clause.
PlSqlParserListener.prototype.enterStorage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#storage_clause.
PlSqlParserListener.prototype.exitStorage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#deferred_segment_creation.
PlSqlParserListener.prototype.enterDeferred_segment_creation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#deferred_segment_creation.
PlSqlParserListener.prototype.exitDeferred_segment_creation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#segment_attributes_clause.
PlSqlParserListener.prototype.enterSegment_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#segment_attributes_clause.
PlSqlParserListener.prototype.exitSegment_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#physical_properties.
PlSqlParserListener.prototype.enterPhysical_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#physical_properties.
PlSqlParserListener.prototype.exitPhysical_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ilm_clause.
PlSqlParserListener.prototype.enterIlm_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ilm_clause.
PlSqlParserListener.prototype.exitIlm_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ilm_policy_clause.
PlSqlParserListener.prototype.enterIlm_policy_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ilm_policy_clause.
PlSqlParserListener.prototype.exitIlm_policy_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ilm_compression_policy.
PlSqlParserListener.prototype.enterIlm_compression_policy = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ilm_compression_policy.
PlSqlParserListener.prototype.exitIlm_compression_policy = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ilm_tiering_policy.
PlSqlParserListener.prototype.enterIlm_tiering_policy = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ilm_tiering_policy.
PlSqlParserListener.prototype.exitIlm_tiering_policy = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ilm_after_on.
PlSqlParserListener.prototype.enterIlm_after_on = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ilm_after_on.
PlSqlParserListener.prototype.exitIlm_after_on = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#segment_group.
PlSqlParserListener.prototype.enterSegment_group = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#segment_group.
PlSqlParserListener.prototype.exitSegment_group = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ilm_inmemory_policy.
PlSqlParserListener.prototype.enterIlm_inmemory_policy = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ilm_inmemory_policy.
PlSqlParserListener.prototype.exitIlm_inmemory_policy = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ilm_time_period.
PlSqlParserListener.prototype.enterIlm_time_period = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ilm_time_period.
PlSqlParserListener.prototype.exitIlm_time_period = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#heap_org_table_clause.
PlSqlParserListener.prototype.enterHeap_org_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#heap_org_table_clause.
PlSqlParserListener.prototype.exitHeap_org_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#external_table_clause.
PlSqlParserListener.prototype.enterExternal_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#external_table_clause.
PlSqlParserListener.prototype.exitExternal_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#access_driver_type.
PlSqlParserListener.prototype.enterAccess_driver_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#access_driver_type.
PlSqlParserListener.prototype.exitAccess_driver_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#external_table_data_props.
PlSqlParserListener.prototype.enterExternal_table_data_props = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#external_table_data_props.
PlSqlParserListener.prototype.exitExternal_table_data_props = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#opaque_format_spec.
PlSqlParserListener.prototype.enterOpaque_format_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#opaque_format_spec.
PlSqlParserListener.prototype.exitOpaque_format_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#row_movement_clause.
PlSqlParserListener.prototype.enterRow_movement_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#row_movement_clause.
PlSqlParserListener.prototype.exitRow_movement_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_archive_clause.
PlSqlParserListener.prototype.enterFlashback_archive_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_archive_clause.
PlSqlParserListener.prototype.exitFlashback_archive_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#log_grp.
PlSqlParserListener.prototype.enterLog_grp = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#log_grp.
PlSqlParserListener.prototype.exitLog_grp = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_table_logging.
PlSqlParserListener.prototype.enterSupplemental_table_logging = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_table_logging.
PlSqlParserListener.prototype.exitSupplemental_table_logging = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_log_grp_clause.
PlSqlParserListener.prototype.enterSupplemental_log_grp_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_log_grp_clause.
PlSqlParserListener.prototype.exitSupplemental_log_grp_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_id_key_clause.
PlSqlParserListener.prototype.enterSupplemental_id_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_id_key_clause.
PlSqlParserListener.prototype.exitSupplemental_id_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#allocate_extent_clause.
PlSqlParserListener.prototype.enterAllocate_extent_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#allocate_extent_clause.
PlSqlParserListener.prototype.exitAllocate_extent_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#deallocate_unused_clause.
PlSqlParserListener.prototype.enterDeallocate_unused_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#deallocate_unused_clause.
PlSqlParserListener.prototype.exitDeallocate_unused_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#shrink_clause.
PlSqlParserListener.prototype.enterShrink_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#shrink_clause.
PlSqlParserListener.prototype.exitShrink_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#records_per_block_clause.
PlSqlParserListener.prototype.enterRecords_per_block_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#records_per_block_clause.
PlSqlParserListener.prototype.exitRecords_per_block_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#upgrade_table_clause.
PlSqlParserListener.prototype.enterUpgrade_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#upgrade_table_clause.
PlSqlParserListener.prototype.exitUpgrade_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#truncate_table.
PlSqlParserListener.prototype.enterTruncate_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#truncate_table.
PlSqlParserListener.prototype.exitTruncate_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_table.
PlSqlParserListener.prototype.enterDrop_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_table.
PlSqlParserListener.prototype.exitDrop_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_tablespace.
PlSqlParserListener.prototype.enterDrop_tablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_tablespace.
PlSqlParserListener.prototype.exitDrop_tablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_tablespace_set.
PlSqlParserListener.prototype.enterDrop_tablespace_set = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_tablespace_set.
PlSqlParserListener.prototype.exitDrop_tablespace_set = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#including_contents_clause.
PlSqlParserListener.prototype.enterIncluding_contents_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#including_contents_clause.
PlSqlParserListener.prototype.exitIncluding_contents_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_view.
PlSqlParserListener.prototype.enterDrop_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_view.
PlSqlParserListener.prototype.exitDrop_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#comment_on_column.
PlSqlParserListener.prototype.enterComment_on_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#comment_on_column.
PlSqlParserListener.prototype.exitComment_on_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#enable_or_disable.
PlSqlParserListener.prototype.enterEnable_or_disable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#enable_or_disable.
PlSqlParserListener.prototype.exitEnable_or_disable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#allow_or_disallow.
PlSqlParserListener.prototype.enterAllow_or_disallow = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#allow_or_disallow.
PlSqlParserListener.prototype.exitAllow_or_disallow = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_synonym.
PlSqlParserListener.prototype.enterAlter_synonym = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_synonym.
PlSqlParserListener.prototype.exitAlter_synonym = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_synonym.
PlSqlParserListener.prototype.enterCreate_synonym = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_synonym.
PlSqlParserListener.prototype.exitCreate_synonym = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_synonym.
PlSqlParserListener.prototype.enterDrop_synonym = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_synonym.
PlSqlParserListener.prototype.exitDrop_synonym = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_spfile.
PlSqlParserListener.prototype.enterCreate_spfile = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_spfile.
PlSqlParserListener.prototype.exitCreate_spfile = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#spfile_name.
PlSqlParserListener.prototype.enterSpfile_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#spfile_name.
PlSqlParserListener.prototype.exitSpfile_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pfile_name.
PlSqlParserListener.prototype.enterPfile_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pfile_name.
PlSqlParserListener.prototype.exitPfile_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#comment_on_table.
PlSqlParserListener.prototype.enterComment_on_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#comment_on_table.
PlSqlParserListener.prototype.exitComment_on_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#comment_on_materialized.
PlSqlParserListener.prototype.enterComment_on_materialized = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#comment_on_materialized.
PlSqlParserListener.prototype.exitComment_on_materialized = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_analytic_view.
PlSqlParserListener.prototype.enterAlter_analytic_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_analytic_view.
PlSqlParserListener.prototype.exitAlter_analytic_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_add_cache_clause.
PlSqlParserListener.prototype.enterAlter_add_cache_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_add_cache_clause.
PlSqlParserListener.prototype.exitAlter_add_cache_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#levels_item.
PlSqlParserListener.prototype.enterLevels_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#levels_item.
PlSqlParserListener.prototype.exitLevels_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#measure_list.
PlSqlParserListener.prototype.enterMeasure_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#measure_list.
PlSqlParserListener.prototype.exitMeasure_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_drop_cache_clause.
PlSqlParserListener.prototype.enterAlter_drop_cache_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_drop_cache_clause.
PlSqlParserListener.prototype.exitAlter_drop_cache_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_attribute_dimension.
PlSqlParserListener.prototype.enterAlter_attribute_dimension = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_attribute_dimension.
PlSqlParserListener.prototype.exitAlter_attribute_dimension = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_audit_policy.
PlSqlParserListener.prototype.enterAlter_audit_policy = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_audit_policy.
PlSqlParserListener.prototype.exitAlter_audit_policy = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_cluster.
PlSqlParserListener.prototype.enterAlter_cluster = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_cluster.
PlSqlParserListener.prototype.exitAlter_cluster = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_analytic_view.
PlSqlParserListener.prototype.enterDrop_analytic_view = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_analytic_view.
PlSqlParserListener.prototype.exitDrop_analytic_view = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_attribute_dimension.
PlSqlParserListener.prototype.enterDrop_attribute_dimension = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_attribute_dimension.
PlSqlParserListener.prototype.exitDrop_attribute_dimension = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_audit_policy.
PlSqlParserListener.prototype.enterDrop_audit_policy = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_audit_policy.
PlSqlParserListener.prototype.exitDrop_audit_policy = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_flashback_archive.
PlSqlParserListener.prototype.enterDrop_flashback_archive = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_flashback_archive.
PlSqlParserListener.prototype.exitDrop_flashback_archive = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_cluster.
PlSqlParserListener.prototype.enterDrop_cluster = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_cluster.
PlSqlParserListener.prototype.exitDrop_cluster = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_context.
PlSqlParserListener.prototype.enterDrop_context = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_context.
PlSqlParserListener.prototype.exitDrop_context = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_directory.
PlSqlParserListener.prototype.enterDrop_directory = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_directory.
PlSqlParserListener.prototype.exitDrop_directory = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_diskgroup.
PlSqlParserListener.prototype.enterDrop_diskgroup = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_diskgroup.
PlSqlParserListener.prototype.exitDrop_diskgroup = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_edition.
PlSqlParserListener.prototype.enterDrop_edition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_edition.
PlSqlParserListener.prototype.exitDrop_edition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#truncate_cluster.
PlSqlParserListener.prototype.enterTruncate_cluster = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#truncate_cluster.
PlSqlParserListener.prototype.exitTruncate_cluster = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cache_or_nocache.
PlSqlParserListener.prototype.enterCache_or_nocache = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cache_or_nocache.
PlSqlParserListener.prototype.exitCache_or_nocache = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#database_name.
PlSqlParserListener.prototype.enterDatabase_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#database_name.
PlSqlParserListener.prototype.exitDatabase_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_database.
PlSqlParserListener.prototype.enterAlter_database = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_database.
PlSqlParserListener.prototype.exitAlter_database = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#database_clause.
PlSqlParserListener.prototype.enterDatabase_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#database_clause.
PlSqlParserListener.prototype.exitDatabase_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#startup_clauses.
PlSqlParserListener.prototype.enterStartup_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#startup_clauses.
PlSqlParserListener.prototype.exitStartup_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#resetlogs_or_noresetlogs.
PlSqlParserListener.prototype.enterResetlogs_or_noresetlogs = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#resetlogs_or_noresetlogs.
PlSqlParserListener.prototype.exitResetlogs_or_noresetlogs = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#upgrade_or_downgrade.
PlSqlParserListener.prototype.enterUpgrade_or_downgrade = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#upgrade_or_downgrade.
PlSqlParserListener.prototype.exitUpgrade_or_downgrade = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#recovery_clauses.
PlSqlParserListener.prototype.enterRecovery_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#recovery_clauses.
PlSqlParserListener.prototype.exitRecovery_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#begin_or_end.
PlSqlParserListener.prototype.enterBegin_or_end = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#begin_or_end.
PlSqlParserListener.prototype.exitBegin_or_end = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_recovery.
PlSqlParserListener.prototype.enterGeneral_recovery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_recovery.
PlSqlParserListener.prototype.exitGeneral_recovery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#full_database_recovery.
PlSqlParserListener.prototype.enterFull_database_recovery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#full_database_recovery.
PlSqlParserListener.prototype.exitFull_database_recovery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partial_database_recovery.
PlSqlParserListener.prototype.enterPartial_database_recovery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partial_database_recovery.
PlSqlParserListener.prototype.exitPartial_database_recovery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partial_database_recovery_10g.
PlSqlParserListener.prototype.enterPartial_database_recovery_10g = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partial_database_recovery_10g.
PlSqlParserListener.prototype.exitPartial_database_recovery_10g = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#managed_standby_recovery.
PlSqlParserListener.prototype.enterManaged_standby_recovery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#managed_standby_recovery.
PlSqlParserListener.prototype.exitManaged_standby_recovery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#db_name.
PlSqlParserListener.prototype.enterDb_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#db_name.
PlSqlParserListener.prototype.exitDb_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#database_file_clauses.
PlSqlParserListener.prototype.enterDatabase_file_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#database_file_clauses.
PlSqlParserListener.prototype.exitDatabase_file_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_datafile_clause.
PlSqlParserListener.prototype.enterCreate_datafile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_datafile_clause.
PlSqlParserListener.prototype.exitCreate_datafile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_datafile_clause.
PlSqlParserListener.prototype.enterAlter_datafile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_datafile_clause.
PlSqlParserListener.prototype.exitAlter_datafile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_tempfile_clause.
PlSqlParserListener.prototype.enterAlter_tempfile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_tempfile_clause.
PlSqlParserListener.prototype.exitAlter_tempfile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#move_datafile_clause.
PlSqlParserListener.prototype.enterMove_datafile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#move_datafile_clause.
PlSqlParserListener.prototype.exitMove_datafile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logfile_clauses.
PlSqlParserListener.prototype.enterLogfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logfile_clauses.
PlSqlParserListener.prototype.exitLogfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_logfile_clauses.
PlSqlParserListener.prototype.enterAdd_logfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_logfile_clauses.
PlSqlParserListener.prototype.exitAdd_logfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#group_redo_logfile.
PlSqlParserListener.prototype.enterGroup_redo_logfile = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#group_redo_logfile.
PlSqlParserListener.prototype.exitGroup_redo_logfile = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_logfile_clauses.
PlSqlParserListener.prototype.enterDrop_logfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_logfile_clauses.
PlSqlParserListener.prototype.exitDrop_logfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#switch_logfile_clause.
PlSqlParserListener.prototype.enterSwitch_logfile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#switch_logfile_clause.
PlSqlParserListener.prototype.exitSwitch_logfile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_db_logging.
PlSqlParserListener.prototype.enterSupplemental_db_logging = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_db_logging.
PlSqlParserListener.prototype.exitSupplemental_db_logging = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_or_drop.
PlSqlParserListener.prototype.enterAdd_or_drop = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_or_drop.
PlSqlParserListener.prototype.exitAdd_or_drop = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_plsql_clause.
PlSqlParserListener.prototype.enterSupplemental_plsql_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_plsql_clause.
PlSqlParserListener.prototype.exitSupplemental_plsql_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logfile_descriptor.
PlSqlParserListener.prototype.enterLogfile_descriptor = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logfile_descriptor.
PlSqlParserListener.prototype.exitLogfile_descriptor = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#controlfile_clauses.
PlSqlParserListener.prototype.enterControlfile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#controlfile_clauses.
PlSqlParserListener.prototype.exitControlfile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trace_file_clause.
PlSqlParserListener.prototype.enterTrace_file_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trace_file_clause.
PlSqlParserListener.prototype.exitTrace_file_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#standby_database_clauses.
PlSqlParserListener.prototype.enterStandby_database_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#standby_database_clauses.
PlSqlParserListener.prototype.exitStandby_database_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#activate_standby_db_clause.
PlSqlParserListener.prototype.enterActivate_standby_db_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#activate_standby_db_clause.
PlSqlParserListener.prototype.exitActivate_standby_db_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#maximize_standby_db_clause.
PlSqlParserListener.prototype.enterMaximize_standby_db_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#maximize_standby_db_clause.
PlSqlParserListener.prototype.exitMaximize_standby_db_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#register_logfile_clause.
PlSqlParserListener.prototype.enterRegister_logfile_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#register_logfile_clause.
PlSqlParserListener.prototype.exitRegister_logfile_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#commit_switchover_clause.
PlSqlParserListener.prototype.enterCommit_switchover_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#commit_switchover_clause.
PlSqlParserListener.prototype.exitCommit_switchover_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#start_standby_clause.
PlSqlParserListener.prototype.enterStart_standby_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#start_standby_clause.
PlSqlParserListener.prototype.exitStart_standby_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#stop_standby_clause.
PlSqlParserListener.prototype.enterStop_standby_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#stop_standby_clause.
PlSqlParserListener.prototype.exitStop_standby_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#convert_database_clause.
PlSqlParserListener.prototype.enterConvert_database_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#convert_database_clause.
PlSqlParserListener.prototype.exitConvert_database_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_settings_clause.
PlSqlParserListener.prototype.enterDefault_settings_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_settings_clause.
PlSqlParserListener.prototype.exitDefault_settings_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_time_zone_clause.
PlSqlParserListener.prototype.enterSet_time_zone_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_time_zone_clause.
PlSqlParserListener.prototype.exitSet_time_zone_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#instance_clauses.
PlSqlParserListener.prototype.enterInstance_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#instance_clauses.
PlSqlParserListener.prototype.exitInstance_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#security_clause.
PlSqlParserListener.prototype.enterSecurity_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#security_clause.
PlSqlParserListener.prototype.exitSecurity_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#domain.
PlSqlParserListener.prototype.enterDomain = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#domain.
PlSqlParserListener.prototype.exitDomain = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#database.
PlSqlParserListener.prototype.enterDatabase = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#database.
PlSqlParserListener.prototype.exitDatabase = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#edition_name.
PlSqlParserListener.prototype.enterEdition_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#edition_name.
PlSqlParserListener.prototype.exitEdition_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#filenumber.
PlSqlParserListener.prototype.enterFilenumber = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#filenumber.
PlSqlParserListener.prototype.exitFilenumber = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#filename.
PlSqlParserListener.prototype.enterFilename = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#filename.
PlSqlParserListener.prototype.exitFilename = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#prepare_clause.
PlSqlParserListener.prototype.enterPrepare_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#prepare_clause.
PlSqlParserListener.prototype.exitPrepare_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_mirror_clause.
PlSqlParserListener.prototype.enterDrop_mirror_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_mirror_clause.
PlSqlParserListener.prototype.exitDrop_mirror_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lost_write_protection.
PlSqlParserListener.prototype.enterLost_write_protection = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lost_write_protection.
PlSqlParserListener.prototype.exitLost_write_protection = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cdb_fleet_clauses.
PlSqlParserListener.prototype.enterCdb_fleet_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cdb_fleet_clauses.
PlSqlParserListener.prototype.exitCdb_fleet_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lead_cdb_clause.
PlSqlParserListener.prototype.enterLead_cdb_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lead_cdb_clause.
PlSqlParserListener.prototype.exitLead_cdb_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lead_cdb_uri_clause.
PlSqlParserListener.prototype.enterLead_cdb_uri_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lead_cdb_uri_clause.
PlSqlParserListener.prototype.exitLead_cdb_uri_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#property_clauses.
PlSqlParserListener.prototype.enterProperty_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#property_clauses.
PlSqlParserListener.prototype.exitProperty_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#replay_upgrade_clauses.
PlSqlParserListener.prototype.enterReplay_upgrade_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#replay_upgrade_clauses.
PlSqlParserListener.prototype.exitReplay_upgrade_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_database_link.
PlSqlParserListener.prototype.enterAlter_database_link = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_database_link.
PlSqlParserListener.prototype.exitAlter_database_link = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#password_value.
PlSqlParserListener.prototype.enterPassword_value = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#password_value.
PlSqlParserListener.prototype.exitPassword_value = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#link_authentication.
PlSqlParserListener.prototype.enterLink_authentication = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#link_authentication.
PlSqlParserListener.prototype.exitLink_authentication = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_database.
PlSqlParserListener.prototype.enterCreate_database = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_database.
PlSqlParserListener.prototype.exitCreate_database = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#database_logging_clauses.
PlSqlParserListener.prototype.enterDatabase_logging_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#database_logging_clauses.
PlSqlParserListener.prototype.exitDatabase_logging_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#database_logging_sub_clause.
PlSqlParserListener.prototype.enterDatabase_logging_sub_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#database_logging_sub_clause.
PlSqlParserListener.prototype.exitDatabase_logging_sub_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_clauses.
PlSqlParserListener.prototype.enterTablespace_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_clauses.
PlSqlParserListener.prototype.exitTablespace_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#enable_pluggable_database.
PlSqlParserListener.prototype.enterEnable_pluggable_database = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#enable_pluggable_database.
PlSqlParserListener.prototype.exitEnable_pluggable_database = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#file_name_convert.
PlSqlParserListener.prototype.enterFile_name_convert = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#file_name_convert.
PlSqlParserListener.prototype.exitFile_name_convert = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#filename_convert_sub_clause.
PlSqlParserListener.prototype.enterFilename_convert_sub_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#filename_convert_sub_clause.
PlSqlParserListener.prototype.exitFilename_convert_sub_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace_datafile_clauses.
PlSqlParserListener.prototype.enterTablespace_datafile_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace_datafile_clauses.
PlSqlParserListener.prototype.exitTablespace_datafile_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#undo_mode_clause.
PlSqlParserListener.prototype.enterUndo_mode_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#undo_mode_clause.
PlSqlParserListener.prototype.exitUndo_mode_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_tablespace.
PlSqlParserListener.prototype.enterDefault_tablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_tablespace.
PlSqlParserListener.prototype.exitDefault_tablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_temp_tablespace.
PlSqlParserListener.prototype.enterDefault_temp_tablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_temp_tablespace.
PlSqlParserListener.prototype.exitDefault_temp_tablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#undo_tablespace.
PlSqlParserListener.prototype.enterUndo_tablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#undo_tablespace.
PlSqlParserListener.prototype.exitUndo_tablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_database.
PlSqlParserListener.prototype.enterDrop_database = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_database.
PlSqlParserListener.prototype.exitDrop_database = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_database_link.
PlSqlParserListener.prototype.enterCreate_database_link = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_database_link.
PlSqlParserListener.prototype.exitCreate_database_link = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dblink.
PlSqlParserListener.prototype.enterDblink = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dblink.
PlSqlParserListener.prototype.exitDblink = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_database_link.
PlSqlParserListener.prototype.enterDrop_database_link = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_database_link.
PlSqlParserListener.prototype.exitDrop_database_link = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_tablespace_set.
PlSqlParserListener.prototype.enterAlter_tablespace_set = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_tablespace_set.
PlSqlParserListener.prototype.exitAlter_tablespace_set = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_tablespace_attrs.
PlSqlParserListener.prototype.enterAlter_tablespace_attrs = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_tablespace_attrs.
PlSqlParserListener.prototype.exitAlter_tablespace_attrs = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_tablespace_encryption.
PlSqlParserListener.prototype.enterAlter_tablespace_encryption = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_tablespace_encryption.
PlSqlParserListener.prototype.exitAlter_tablespace_encryption = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ts_file_name_convert.
PlSqlParserListener.prototype.enterTs_file_name_convert = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ts_file_name_convert.
PlSqlParserListener.prototype.exitTs_file_name_convert = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_role.
PlSqlParserListener.prototype.enterAlter_role = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_role.
PlSqlParserListener.prototype.exitAlter_role = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#role_identified_clause.
PlSqlParserListener.prototype.enterRole_identified_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#role_identified_clause.
PlSqlParserListener.prototype.exitRole_identified_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_table.
PlSqlParserListener.prototype.enterAlter_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_table.
PlSqlParserListener.prototype.exitAlter_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#memoptimize_read_write_clause.
PlSqlParserListener.prototype.enterMemoptimize_read_write_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#memoptimize_read_write_clause.
PlSqlParserListener.prototype.exitMemoptimize_read_write_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_table_properties.
PlSqlParserListener.prototype.enterAlter_table_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_table_properties.
PlSqlParserListener.prototype.exitAlter_table_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_table_partitioning.
PlSqlParserListener.prototype.enterAlter_table_partitioning = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_table_partitioning.
PlSqlParserListener.prototype.exitAlter_table_partitioning = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_table_partition.
PlSqlParserListener.prototype.enterAdd_table_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_table_partition.
PlSqlParserListener.prototype.exitAdd_table_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_table_partition.
PlSqlParserListener.prototype.enterDrop_table_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_table_partition.
PlSqlParserListener.prototype.exitDrop_table_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_table_partition.
PlSqlParserListener.prototype.enterMerge_table_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_table_partition.
PlSqlParserListener.prototype.exitMerge_table_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_table_partition.
PlSqlParserListener.prototype.enterModify_table_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_table_partition.
PlSqlParserListener.prototype.exitModify_table_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#split_table_partition.
PlSqlParserListener.prototype.enterSplit_table_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#split_table_partition.
PlSqlParserListener.prototype.exitSplit_table_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#truncate_table_partition.
PlSqlParserListener.prototype.enterTruncate_table_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#truncate_table_partition.
PlSqlParserListener.prototype.exitTruncate_table_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exchange_table_partition.
PlSqlParserListener.prototype.enterExchange_table_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exchange_table_partition.
PlSqlParserListener.prototype.exitExchange_table_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#coalesce_table_partition.
PlSqlParserListener.prototype.enterCoalesce_table_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#coalesce_table_partition.
PlSqlParserListener.prototype.exitCoalesce_table_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_interval_partition.
PlSqlParserListener.prototype.enterAlter_interval_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_interval_partition.
PlSqlParserListener.prototype.exitAlter_interval_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_extended_names.
PlSqlParserListener.prototype.enterPartition_extended_names = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_extended_names.
PlSqlParserListener.prototype.exitPartition_extended_names = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subpartition_extended_names.
PlSqlParserListener.prototype.enterSubpartition_extended_names = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subpartition_extended_names.
PlSqlParserListener.prototype.exitSubpartition_extended_names = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_table_properties_1.
PlSqlParserListener.prototype.enterAlter_table_properties_1 = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_table_properties_1.
PlSqlParserListener.prototype.exitAlter_table_properties_1 = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_iot_clauses.
PlSqlParserListener.prototype.enterAlter_iot_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_iot_clauses.
PlSqlParserListener.prototype.exitAlter_iot_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_mapping_table_clause.
PlSqlParserListener.prototype.enterAlter_mapping_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_mapping_table_clause.
PlSqlParserListener.prototype.exitAlter_mapping_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_overflow_clause.
PlSqlParserListener.prototype.enterAlter_overflow_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_overflow_clause.
PlSqlParserListener.prototype.exitAlter_overflow_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_overflow_clause.
PlSqlParserListener.prototype.enterAdd_overflow_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_overflow_clause.
PlSqlParserListener.prototype.exitAdd_overflow_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_index_clauses.
PlSqlParserListener.prototype.enterUpdate_index_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_index_clauses.
PlSqlParserListener.prototype.exitUpdate_index_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_global_index_clause.
PlSqlParserListener.prototype.enterUpdate_global_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_global_index_clause.
PlSqlParserListener.prototype.exitUpdate_global_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_all_indexes_clause.
PlSqlParserListener.prototype.enterUpdate_all_indexes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_all_indexes_clause.
PlSqlParserListener.prototype.exitUpdate_all_indexes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_all_indexes_index_clause.
PlSqlParserListener.prototype.enterUpdate_all_indexes_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_all_indexes_index_clause.
PlSqlParserListener.prototype.exitUpdate_all_indexes_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_index_partition.
PlSqlParserListener.prototype.enterUpdate_index_partition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_index_partition.
PlSqlParserListener.prototype.exitUpdate_index_partition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_index_subpartition.
PlSqlParserListener.prototype.enterUpdate_index_subpartition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_index_subpartition.
PlSqlParserListener.prototype.exitUpdate_index_subpartition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#enable_disable_clause.
PlSqlParserListener.prototype.enterEnable_disable_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#enable_disable_clause.
PlSqlParserListener.prototype.exitEnable_disable_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_index_clause.
PlSqlParserListener.prototype.enterUsing_index_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_index_clause.
PlSqlParserListener.prototype.exitUsing_index_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_attributes.
PlSqlParserListener.prototype.enterIndex_attributes = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_attributes.
PlSqlParserListener.prototype.exitIndex_attributes = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sort_or_nosort.
PlSqlParserListener.prototype.enterSort_or_nosort = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sort_or_nosort.
PlSqlParserListener.prototype.exitSort_or_nosort = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exceptions_clause.
PlSqlParserListener.prototype.enterExceptions_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exceptions_clause.
PlSqlParserListener.prototype.exitExceptions_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#move_table_clause.
PlSqlParserListener.prototype.enterMove_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#move_table_clause.
PlSqlParserListener.prototype.exitMove_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_org_table_clause.
PlSqlParserListener.prototype.enterIndex_org_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_org_table_clause.
PlSqlParserListener.prototype.exitIndex_org_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#mapping_table_clause.
PlSqlParserListener.prototype.enterMapping_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#mapping_table_clause.
PlSqlParserListener.prototype.exitMapping_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#key_compression.
PlSqlParserListener.prototype.enterKey_compression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#key_compression.
PlSqlParserListener.prototype.exitKey_compression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_org_overflow_clause.
PlSqlParserListener.prototype.enterIndex_org_overflow_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_org_overflow_clause.
PlSqlParserListener.prototype.exitIndex_org_overflow_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_clauses.
PlSqlParserListener.prototype.enterColumn_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_clauses.
PlSqlParserListener.prototype.exitColumn_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_collection_retrieval.
PlSqlParserListener.prototype.enterModify_collection_retrieval = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_collection_retrieval.
PlSqlParserListener.prototype.exitModify_collection_retrieval = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#collection_item.
PlSqlParserListener.prototype.enterCollection_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#collection_item.
PlSqlParserListener.prototype.exitCollection_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rename_column_clause.
PlSqlParserListener.prototype.enterRename_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rename_column_clause.
PlSqlParserListener.prototype.exitRename_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#old_column_name.
PlSqlParserListener.prototype.enterOld_column_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#old_column_name.
PlSqlParserListener.prototype.exitOld_column_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_column_name.
PlSqlParserListener.prototype.enterNew_column_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_column_name.
PlSqlParserListener.prototype.exitNew_column_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_modify_drop_column_clauses.
PlSqlParserListener.prototype.enterAdd_modify_drop_column_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_modify_drop_column_clauses.
PlSqlParserListener.prototype.exitAdd_modify_drop_column_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_column_clause.
PlSqlParserListener.prototype.enterDrop_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_column_clause.
PlSqlParserListener.prototype.exitDrop_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_column_clauses.
PlSqlParserListener.prototype.enterModify_column_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_column_clauses.
PlSqlParserListener.prototype.exitModify_column_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_col_properties.
PlSqlParserListener.prototype.enterModify_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_col_properties.
PlSqlParserListener.prototype.exitModify_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_col_visibility.
PlSqlParserListener.prototype.enterModify_col_visibility = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_col_visibility.
PlSqlParserListener.prototype.exitModify_col_visibility = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_col_substitutable.
PlSqlParserListener.prototype.enterModify_col_substitutable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_col_substitutable.
PlSqlParserListener.prototype.exitModify_col_substitutable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_column_clause.
PlSqlParserListener.prototype.enterAdd_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_column_clause.
PlSqlParserListener.prototype.exitAdd_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_varray_col_properties.
PlSqlParserListener.prototype.enterAlter_varray_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_varray_col_properties.
PlSqlParserListener.prototype.exitAlter_varray_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#varray_col_properties.
PlSqlParserListener.prototype.enterVarray_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#varray_col_properties.
PlSqlParserListener.prototype.exitVarray_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#varray_storage_clause.
PlSqlParserListener.prototype.enterVarray_storage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#varray_storage_clause.
PlSqlParserListener.prototype.exitVarray_storage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_segname.
PlSqlParserListener.prototype.enterLob_segname = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_segname.
PlSqlParserListener.prototype.exitLob_segname = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_item.
PlSqlParserListener.prototype.enterLob_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_item.
PlSqlParserListener.prototype.exitLob_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_storage_parameters.
PlSqlParserListener.prototype.enterLob_storage_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_storage_parameters.
PlSqlParserListener.prototype.exitLob_storage_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_storage_clause.
PlSqlParserListener.prototype.enterLob_storage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_storage_clause.
PlSqlParserListener.prototype.exitLob_storage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_lob_storage_clause.
PlSqlParserListener.prototype.enterModify_lob_storage_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_lob_storage_clause.
PlSqlParserListener.prototype.exitModify_lob_storage_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modify_lob_parameters.
PlSqlParserListener.prototype.enterModify_lob_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modify_lob_parameters.
PlSqlParserListener.prototype.exitModify_lob_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_parameters.
PlSqlParserListener.prototype.enterLob_parameters = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_parameters.
PlSqlParserListener.prototype.exitLob_parameters = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_deduplicate_clause.
PlSqlParserListener.prototype.enterLob_deduplicate_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_deduplicate_clause.
PlSqlParserListener.prototype.exitLob_deduplicate_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_compression_clause.
PlSqlParserListener.prototype.enterLob_compression_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_compression_clause.
PlSqlParserListener.prototype.exitLob_compression_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_retention_clause.
PlSqlParserListener.prototype.enterLob_retention_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_retention_clause.
PlSqlParserListener.prototype.exitLob_retention_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#encryption_spec.
PlSqlParserListener.prototype.enterEncryption_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#encryption_spec.
PlSqlParserListener.prototype.exitEncryption_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tablespace.
PlSqlParserListener.prototype.enterTablespace = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tablespace.
PlSqlParserListener.prototype.exitTablespace = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#varray_item.
PlSqlParserListener.prototype.enterVarray_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#varray_item.
PlSqlParserListener.prototype.exitVarray_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_properties.
PlSqlParserListener.prototype.enterColumn_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_properties.
PlSqlParserListener.prototype.exitColumn_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lob_partition_storage.
PlSqlParserListener.prototype.enterLob_partition_storage = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lob_partition_storage.
PlSqlParserListener.prototype.exitLob_partition_storage = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#period_definition.
PlSqlParserListener.prototype.enterPeriod_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#period_definition.
PlSqlParserListener.prototype.exitPeriod_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#start_time_column.
PlSqlParserListener.prototype.enterStart_time_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#start_time_column.
PlSqlParserListener.prototype.exitStart_time_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#end_time_column.
PlSqlParserListener.prototype.enterEnd_time_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#end_time_column.
PlSqlParserListener.prototype.exitEnd_time_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_definition.
PlSqlParserListener.prototype.enterColumn_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_definition.
PlSqlParserListener.prototype.exitColumn_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_collation_name.
PlSqlParserListener.prototype.enterColumn_collation_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_collation_name.
PlSqlParserListener.prototype.exitColumn_collation_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identity_clause.
PlSqlParserListener.prototype.enterIdentity_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identity_clause.
PlSqlParserListener.prototype.exitIdentity_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identity_options_parentheses.
PlSqlParserListener.prototype.enterIdentity_options_parentheses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identity_options_parentheses.
PlSqlParserListener.prototype.exitIdentity_options_parentheses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identity_options.
PlSqlParserListener.prototype.enterIdentity_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identity_options.
PlSqlParserListener.prototype.exitIdentity_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#virtual_column_definition.
PlSqlParserListener.prototype.enterVirtual_column_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#virtual_column_definition.
PlSqlParserListener.prototype.exitVirtual_column_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#autogenerated_sequence_definition.
PlSqlParserListener.prototype.enterAutogenerated_sequence_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#autogenerated_sequence_definition.
PlSqlParserListener.prototype.exitAutogenerated_sequence_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#evaluation_edition_clause.
PlSqlParserListener.prototype.enterEvaluation_edition_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#evaluation_edition_clause.
PlSqlParserListener.prototype.exitEvaluation_edition_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#out_of_line_part_storage.
PlSqlParserListener.prototype.enterOut_of_line_part_storage = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#out_of_line_part_storage.
PlSqlParserListener.prototype.exitOut_of_line_part_storage = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#nested_table_col_properties.
PlSqlParserListener.prototype.enterNested_table_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#nested_table_col_properties.
PlSqlParserListener.prototype.exitNested_table_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#nested_item.
PlSqlParserListener.prototype.enterNested_item = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#nested_item.
PlSqlParserListener.prototype.exitNested_item = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#substitutable_column_clause.
PlSqlParserListener.prototype.enterSubstitutable_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#substitutable_column_clause.
PlSqlParserListener.prototype.exitSubstitutable_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_name.
PlSqlParserListener.prototype.enterPartition_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_name.
PlSqlParserListener.prototype.exitPartition_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#supplemental_logging_props.
PlSqlParserListener.prototype.enterSupplemental_logging_props = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#supplemental_logging_props.
PlSqlParserListener.prototype.exitSupplemental_logging_props = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_or_attribute.
PlSqlParserListener.prototype.enterColumn_or_attribute = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_or_attribute.
PlSqlParserListener.prototype.exitColumn_or_attribute = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_type_col_properties.
PlSqlParserListener.prototype.enterObject_type_col_properties = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_type_col_properties.
PlSqlParserListener.prototype.exitObject_type_col_properties = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constraint_clauses.
PlSqlParserListener.prototype.enterConstraint_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constraint_clauses.
PlSqlParserListener.prototype.exitConstraint_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#old_constraint_name.
PlSqlParserListener.prototype.enterOld_constraint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#old_constraint_name.
PlSqlParserListener.prototype.exitOld_constraint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#new_constraint_name.
PlSqlParserListener.prototype.enterNew_constraint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#new_constraint_name.
PlSqlParserListener.prototype.exitNew_constraint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_constraint_clause.
PlSqlParserListener.prototype.enterDrop_constraint_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_constraint_clause.
PlSqlParserListener.prototype.exitDrop_constraint_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_constraint.
PlSqlParserListener.prototype.enterAdd_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_constraint.
PlSqlParserListener.prototype.exitAdd_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_constraint_clause.
PlSqlParserListener.prototype.enterAdd_constraint_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_constraint_clause.
PlSqlParserListener.prototype.exitAdd_constraint_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#check_constraint.
PlSqlParserListener.prototype.enterCheck_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#check_constraint.
PlSqlParserListener.prototype.exitCheck_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_constraint.
PlSqlParserListener.prototype.enterDrop_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_constraint.
PlSqlParserListener.prototype.exitDrop_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#enable_constraint.
PlSqlParserListener.prototype.enterEnable_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#enable_constraint.
PlSqlParserListener.prototype.exitEnable_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#disable_constraint.
PlSqlParserListener.prototype.enterDisable_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#disable_constraint.
PlSqlParserListener.prototype.exitDisable_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#foreign_key_clause.
PlSqlParserListener.prototype.enterForeign_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#foreign_key_clause.
PlSqlParserListener.prototype.exitForeign_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#references_clause.
PlSqlParserListener.prototype.enterReferences_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#references_clause.
PlSqlParserListener.prototype.exitReferences_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_delete_clause.
PlSqlParserListener.prototype.enterOn_delete_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_delete_clause.
PlSqlParserListener.prototype.exitOn_delete_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unique_key_clause.
PlSqlParserListener.prototype.enterUnique_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unique_key_clause.
PlSqlParserListener.prototype.exitUnique_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#primary_key_clause.
PlSqlParserListener.prototype.enterPrimary_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#primary_key_clause.
PlSqlParserListener.prototype.exitPrimary_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#anonymous_block.
PlSqlParserListener.prototype.enterAnonymous_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#anonymous_block.
PlSqlParserListener.prototype.exitAnonymous_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#invoker_rights_clause.
PlSqlParserListener.prototype.enterInvoker_rights_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#invoker_rights_clause.
PlSqlParserListener.prototype.exitInvoker_rights_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#call_spec.
PlSqlParserListener.prototype.enterCall_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#call_spec.
PlSqlParserListener.prototype.exitCall_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#java_spec.
PlSqlParserListener.prototype.enterJava_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#java_spec.
PlSqlParserListener.prototype.exitJava_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#c_spec.
PlSqlParserListener.prototype.enterC_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#c_spec.
PlSqlParserListener.prototype.exitC_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#c_agent_in_clause.
PlSqlParserListener.prototype.enterC_agent_in_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#c_agent_in_clause.
PlSqlParserListener.prototype.exitC_agent_in_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#c_parameters_clause.
PlSqlParserListener.prototype.enterC_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#c_parameters_clause.
PlSqlParserListener.prototype.exitC_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter.
PlSqlParserListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter.
PlSqlParserListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_value_part.
PlSqlParserListener.prototype.enterDefault_value_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_value_part.
PlSqlParserListener.prototype.exitDefault_value_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#seq_of_declare_specs.
PlSqlParserListener.prototype.enterSeq_of_declare_specs = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#seq_of_declare_specs.
PlSqlParserListener.prototype.exitSeq_of_declare_specs = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#declare_spec.
PlSqlParserListener.prototype.enterDeclare_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#declare_spec.
PlSqlParserListener.prototype.exitDeclare_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#variable_declaration.
PlSqlParserListener.prototype.enterVariable_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#variable_declaration.
PlSqlParserListener.prototype.exitVariable_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subtype_declaration.
PlSqlParserListener.prototype.enterSubtype_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subtype_declaration.
PlSqlParserListener.prototype.exitSubtype_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_declaration.
PlSqlParserListener.prototype.enterCursor_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_declaration.
PlSqlParserListener.prototype.exitCursor_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter_spec.
PlSqlParserListener.prototype.enterParameter_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter_spec.
PlSqlParserListener.prototype.exitParameter_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exception_declaration.
PlSqlParserListener.prototype.enterException_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exception_declaration.
PlSqlParserListener.prototype.exitException_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pragma_declaration.
PlSqlParserListener.prototype.enterPragma_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pragma_declaration.
PlSqlParserListener.prototype.exitPragma_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#record_type_def.
PlSqlParserListener.prototype.enterRecord_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#record_type_def.
PlSqlParserListener.prototype.exitRecord_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#field_spec.
PlSqlParserListener.prototype.enterField_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#field_spec.
PlSqlParserListener.prototype.exitField_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ref_cursor_type_def.
PlSqlParserListener.prototype.enterRef_cursor_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ref_cursor_type_def.
PlSqlParserListener.prototype.exitRef_cursor_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_declaration.
PlSqlParserListener.prototype.enterType_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_declaration.
PlSqlParserListener.prototype.exitType_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_type_def.
PlSqlParserListener.prototype.enterTable_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_type_def.
PlSqlParserListener.prototype.exitTable_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_indexed_by_part.
PlSqlParserListener.prototype.enterTable_indexed_by_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_indexed_by_part.
PlSqlParserListener.prototype.exitTable_indexed_by_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#varray_type_def.
PlSqlParserListener.prototype.enterVarray_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#varray_type_def.
PlSqlParserListener.prototype.exitVarray_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#seq_of_statements.
PlSqlParserListener.prototype.enterSeq_of_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#seq_of_statements.
PlSqlParserListener.prototype.exitSeq_of_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#label_declaration.
PlSqlParserListener.prototype.enterLabel_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#label_declaration.
PlSqlParserListener.prototype.exitLabel_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#statement.
PlSqlParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#statement.
PlSqlParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#swallow_to_semi.
PlSqlParserListener.prototype.enterSwallow_to_semi = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#swallow_to_semi.
PlSqlParserListener.prototype.exitSwallow_to_semi = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#assignment_statement.
PlSqlParserListener.prototype.enterAssignment_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#assignment_statement.
PlSqlParserListener.prototype.exitAssignment_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#continue_statement.
PlSqlParserListener.prototype.enterContinue_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#continue_statement.
PlSqlParserListener.prototype.exitContinue_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exit_statement.
PlSqlParserListener.prototype.enterExit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exit_statement.
PlSqlParserListener.prototype.exitExit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#goto_statement.
PlSqlParserListener.prototype.enterGoto_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#goto_statement.
PlSqlParserListener.prototype.exitGoto_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#if_statement.
PlSqlParserListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#if_statement.
PlSqlParserListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#elsif_part.
PlSqlParserListener.prototype.enterElsif_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#elsif_part.
PlSqlParserListener.prototype.exitElsif_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#else_part.
PlSqlParserListener.prototype.enterElse_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#else_part.
PlSqlParserListener.prototype.exitElse_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#loop_statement.
PlSqlParserListener.prototype.enterLoop_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#loop_statement.
PlSqlParserListener.prototype.exitLoop_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_loop_param.
PlSqlParserListener.prototype.enterCursor_loop_param = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_loop_param.
PlSqlParserListener.prototype.exitCursor_loop_param = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#forall_statement.
PlSqlParserListener.prototype.enterForall_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#forall_statement.
PlSqlParserListener.prototype.exitForall_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#bounds_clause.
PlSqlParserListener.prototype.enterBounds_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#bounds_clause.
PlSqlParserListener.prototype.exitBounds_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#between_bound.
PlSqlParserListener.prototype.enterBetween_bound = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#between_bound.
PlSqlParserListener.prototype.exitBetween_bound = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lower_bound.
PlSqlParserListener.prototype.enterLower_bound = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lower_bound.
PlSqlParserListener.prototype.exitLower_bound = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#upper_bound.
PlSqlParserListener.prototype.enterUpper_bound = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#upper_bound.
PlSqlParserListener.prototype.exitUpper_bound = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#null_statement.
PlSqlParserListener.prototype.enterNull_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#null_statement.
PlSqlParserListener.prototype.exitNull_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#raise_statement.
PlSqlParserListener.prototype.enterRaise_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#raise_statement.
PlSqlParserListener.prototype.exitRaise_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#return_statement.
PlSqlParserListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#return_statement.
PlSqlParserListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#call_statement.
PlSqlParserListener.prototype.enterCall_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#call_statement.
PlSqlParserListener.prototype.exitCall_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pipe_row_statement.
PlSqlParserListener.prototype.enterPipe_row_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pipe_row_statement.
PlSqlParserListener.prototype.exitPipe_row_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#body.
PlSqlParserListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#body.
PlSqlParserListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exception_handler.
PlSqlParserListener.prototype.enterException_handler = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exception_handler.
PlSqlParserListener.prototype.exitException_handler = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_block.
PlSqlParserListener.prototype.enterTrigger_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_block.
PlSqlParserListener.prototype.exitTrigger_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tps_body.
PlSqlParserListener.prototype.enterTps_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tps_body.
PlSqlParserListener.prototype.exitTps_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#block.
PlSqlParserListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#block.
PlSqlParserListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_statement.
PlSqlParserListener.prototype.enterSql_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_statement.
PlSqlParserListener.prototype.exitSql_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#execute_immediate.
PlSqlParserListener.prototype.enterExecute_immediate = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#execute_immediate.
PlSqlParserListener.prototype.exitExecute_immediate = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dynamic_returning_clause.
PlSqlParserListener.prototype.enterDynamic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dynamic_returning_clause.
PlSqlParserListener.prototype.exitDynamic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#data_manipulation_language_statements.
PlSqlParserListener.prototype.enterData_manipulation_language_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#data_manipulation_language_statements.
PlSqlParserListener.prototype.exitData_manipulation_language_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_manipulation_statements.
PlSqlParserListener.prototype.enterCursor_manipulation_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_manipulation_statements.
PlSqlParserListener.prototype.exitCursor_manipulation_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#close_statement.
PlSqlParserListener.prototype.enterClose_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#close_statement.
PlSqlParserListener.prototype.exitClose_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#open_statement.
PlSqlParserListener.prototype.enterOpen_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#open_statement.
PlSqlParserListener.prototype.exitOpen_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#fetch_statement.
PlSqlParserListener.prototype.enterFetch_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#fetch_statement.
PlSqlParserListener.prototype.exitFetch_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#open_for_statement.
PlSqlParserListener.prototype.enterOpen_for_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#open_for_statement.
PlSqlParserListener.prototype.exitOpen_for_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#transaction_control_statements.
PlSqlParserListener.prototype.enterTransaction_control_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#transaction_control_statements.
PlSqlParserListener.prototype.exitTransaction_control_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_transaction_command.
PlSqlParserListener.prototype.enterSet_transaction_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_transaction_command.
PlSqlParserListener.prototype.exitSet_transaction_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_constraint_command.
PlSqlParserListener.prototype.enterSet_constraint_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_constraint_command.
PlSqlParserListener.prototype.exitSet_constraint_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#commit_statement.
PlSqlParserListener.prototype.enterCommit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#commit_statement.
PlSqlParserListener.prototype.exitCommit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#write_clause.
PlSqlParserListener.prototype.enterWrite_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#write_clause.
PlSqlParserListener.prototype.exitWrite_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollback_statement.
PlSqlParserListener.prototype.enterRollback_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollback_statement.
PlSqlParserListener.prototype.exitRollback_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#savepoint_statement.
PlSqlParserListener.prototype.enterSavepoint_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#savepoint_statement.
PlSqlParserListener.prototype.exitSavepoint_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#explain_statement.
PlSqlParserListener.prototype.enterExplain_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#explain_statement.
PlSqlParserListener.prototype.exitExplain_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#select_only_statement.
PlSqlParserListener.prototype.enterSelect_only_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#select_only_statement.
PlSqlParserListener.prototype.exitSelect_only_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#select_statement.
PlSqlParserListener.prototype.enterSelect_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#select_statement.
PlSqlParserListener.prototype.exitSelect_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_factoring_clause.
PlSqlParserListener.prototype.enterSubquery_factoring_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_factoring_clause.
PlSqlParserListener.prototype.exitSubquery_factoring_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#factoring_element.
PlSqlParserListener.prototype.enterFactoring_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#factoring_element.
PlSqlParserListener.prototype.exitFactoring_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#search_clause.
PlSqlParserListener.prototype.enterSearch_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#search_clause.
PlSqlParserListener.prototype.exitSearch_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cycle_clause.
PlSqlParserListener.prototype.enterCycle_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cycle_clause.
PlSqlParserListener.prototype.exitCycle_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery.
PlSqlParserListener.prototype.enterSubquery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery.
PlSqlParserListener.prototype.exitSubquery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_basic_elements.
PlSqlParserListener.prototype.enterSubquery_basic_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_basic_elements.
PlSqlParserListener.prototype.exitSubquery_basic_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_operation_part.
PlSqlParserListener.prototype.enterSubquery_operation_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_operation_part.
PlSqlParserListener.prototype.exitSubquery_operation_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#query_block.
PlSqlParserListener.prototype.enterQuery_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#query_block.
PlSqlParserListener.prototype.exitQuery_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#selected_list.
PlSqlParserListener.prototype.enterSelected_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#selected_list.
PlSqlParserListener.prototype.exitSelected_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#from_clause.
PlSqlParserListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#from_clause.
PlSqlParserListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#select_list_elements.
PlSqlParserListener.prototype.enterSelect_list_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#select_list_elements.
PlSqlParserListener.prototype.exitSelect_list_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_list.
PlSqlParserListener.prototype.enterTable_ref_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_list.
PlSqlParserListener.prototype.exitTable_ref_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref.
PlSqlParserListener.prototype.enterTable_ref = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref.
PlSqlParserListener.prototype.exitTable_ref = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux.
PlSqlParserListener.prototype.enterTable_ref_aux = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux.
PlSqlParserListener.prototype.exitTable_ref_aux = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux_internal_one.
PlSqlParserListener.prototype.enterTable_ref_aux_internal_one = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux_internal_one.
PlSqlParserListener.prototype.exitTable_ref_aux_internal_one = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux_internal_two.
PlSqlParserListener.prototype.enterTable_ref_aux_internal_two = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux_internal_two.
PlSqlParserListener.prototype.exitTable_ref_aux_internal_two = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux_internal_three.
PlSqlParserListener.prototype.enterTable_ref_aux_internal_three = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux_internal_three.
PlSqlParserListener.prototype.exitTable_ref_aux_internal_three = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_clause.
PlSqlParserListener.prototype.enterJoin_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_clause.
PlSqlParserListener.prototype.exitJoin_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_on_part.
PlSqlParserListener.prototype.enterJoin_on_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_on_part.
PlSqlParserListener.prototype.exitJoin_on_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_using_part.
PlSqlParserListener.prototype.enterJoin_using_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_using_part.
PlSqlParserListener.prototype.exitJoin_using_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#outer_join_type.
PlSqlParserListener.prototype.enterOuter_join_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#outer_join_type.
PlSqlParserListener.prototype.exitOuter_join_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#query_partition_clause.
PlSqlParserListener.prototype.enterQuery_partition_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#query_partition_clause.
PlSqlParserListener.prototype.exitQuery_partition_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_query_clause.
PlSqlParserListener.prototype.enterFlashback_query_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_query_clause.
PlSqlParserListener.prototype.exitFlashback_query_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_clause.
PlSqlParserListener.prototype.enterPivot_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_clause.
PlSqlParserListener.prototype.exitPivot_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_element.
PlSqlParserListener.prototype.enterPivot_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_element.
PlSqlParserListener.prototype.exitPivot_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_for_clause.
PlSqlParserListener.prototype.enterPivot_for_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_for_clause.
PlSqlParserListener.prototype.exitPivot_for_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_in_clause.
PlSqlParserListener.prototype.enterPivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_in_clause.
PlSqlParserListener.prototype.exitPivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_in_clause_element.
PlSqlParserListener.prototype.enterPivot_in_clause_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_in_clause_element.
PlSqlParserListener.prototype.exitPivot_in_clause_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_in_clause_elements.
PlSqlParserListener.prototype.enterPivot_in_clause_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_in_clause_elements.
PlSqlParserListener.prototype.exitPivot_in_clause_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unpivot_clause.
PlSqlParserListener.prototype.enterUnpivot_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unpivot_clause.
PlSqlParserListener.prototype.exitUnpivot_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unpivot_in_clause.
PlSqlParserListener.prototype.enterUnpivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unpivot_in_clause.
PlSqlParserListener.prototype.exitUnpivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unpivot_in_elements.
PlSqlParserListener.prototype.enterUnpivot_in_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unpivot_in_elements.
PlSqlParserListener.prototype.exitUnpivot_in_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hierarchical_query_clause.
PlSqlParserListener.prototype.enterHierarchical_query_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hierarchical_query_clause.
PlSqlParserListener.prototype.exitHierarchical_query_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#start_part.
PlSqlParserListener.prototype.enterStart_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#start_part.
PlSqlParserListener.prototype.exitStart_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#group_by_clause.
PlSqlParserListener.prototype.enterGroup_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#group_by_clause.
PlSqlParserListener.prototype.exitGroup_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#group_by_elements.
PlSqlParserListener.prototype.enterGroup_by_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#group_by_elements.
PlSqlParserListener.prototype.exitGroup_by_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollup_cube_clause.
PlSqlParserListener.prototype.enterRollup_cube_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollup_cube_clause.
PlSqlParserListener.prototype.exitRollup_cube_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grouping_sets_clause.
PlSqlParserListener.prototype.enterGrouping_sets_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grouping_sets_clause.
PlSqlParserListener.prototype.exitGrouping_sets_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grouping_sets_elements.
PlSqlParserListener.prototype.enterGrouping_sets_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grouping_sets_elements.
PlSqlParserListener.prototype.exitGrouping_sets_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#having_clause.
PlSqlParserListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#having_clause.
PlSqlParserListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_clause.
PlSqlParserListener.prototype.enterModel_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_clause.
PlSqlParserListener.prototype.exitModel_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cell_reference_options.
PlSqlParserListener.prototype.enterCell_reference_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cell_reference_options.
PlSqlParserListener.prototype.exitCell_reference_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#return_rows_clause.
PlSqlParserListener.prototype.enterReturn_rows_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#return_rows_clause.
PlSqlParserListener.prototype.exitReturn_rows_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_model.
PlSqlParserListener.prototype.enterReference_model = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_model.
PlSqlParserListener.prototype.exitReference_model = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#main_model.
PlSqlParserListener.prototype.enterMain_model = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#main_model.
PlSqlParserListener.prototype.exitMain_model = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column_clauses.
PlSqlParserListener.prototype.enterModel_column_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column_clauses.
PlSqlParserListener.prototype.exitModel_column_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column_partition_part.
PlSqlParserListener.prototype.enterModel_column_partition_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column_partition_part.
PlSqlParserListener.prototype.exitModel_column_partition_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column_list.
PlSqlParserListener.prototype.enterModel_column_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column_list.
PlSqlParserListener.prototype.exitModel_column_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column.
PlSqlParserListener.prototype.enterModel_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column.
PlSqlParserListener.prototype.exitModel_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_rules_clause.
PlSqlParserListener.prototype.enterModel_rules_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_rules_clause.
PlSqlParserListener.prototype.exitModel_rules_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_rules_part.
PlSqlParserListener.prototype.enterModel_rules_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_rules_part.
PlSqlParserListener.prototype.exitModel_rules_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_rules_element.
PlSqlParserListener.prototype.enterModel_rules_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_rules_element.
PlSqlParserListener.prototype.exitModel_rules_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cell_assignment.
PlSqlParserListener.prototype.enterCell_assignment = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cell_assignment.
PlSqlParserListener.prototype.exitCell_assignment = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_iterate_clause.
PlSqlParserListener.prototype.enterModel_iterate_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_iterate_clause.
PlSqlParserListener.prototype.exitModel_iterate_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#until_part.
PlSqlParserListener.prototype.enterUntil_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#until_part.
PlSqlParserListener.prototype.exitUntil_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#order_by_clause.
PlSqlParserListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#order_by_clause.
PlSqlParserListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#order_by_elements.
PlSqlParserListener.prototype.enterOrder_by_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#order_by_elements.
PlSqlParserListener.prototype.exitOrder_by_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#offset_clause.
PlSqlParserListener.prototype.enterOffset_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#offset_clause.
PlSqlParserListener.prototype.exitOffset_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#fetch_clause.
PlSqlParserListener.prototype.enterFetch_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#fetch_clause.
PlSqlParserListener.prototype.exitFetch_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_update_clause.
PlSqlParserListener.prototype.enterFor_update_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_update_clause.
PlSqlParserListener.prototype.exitFor_update_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_update_of_part.
PlSqlParserListener.prototype.enterFor_update_of_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_update_of_part.
PlSqlParserListener.prototype.exitFor_update_of_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_update_options.
PlSqlParserListener.prototype.enterFor_update_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_update_options.
PlSqlParserListener.prototype.exitFor_update_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_statement.
PlSqlParserListener.prototype.enterUpdate_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_statement.
PlSqlParserListener.prototype.exitUpdate_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_set_clause.
PlSqlParserListener.prototype.enterUpdate_set_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_set_clause.
PlSqlParserListener.prototype.exitUpdate_set_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_based_update_set_clause.
PlSqlParserListener.prototype.enterColumn_based_update_set_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_based_update_set_clause.
PlSqlParserListener.prototype.exitColumn_based_update_set_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#delete_statement.
PlSqlParserListener.prototype.enterDelete_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#delete_statement.
PlSqlParserListener.prototype.exitDelete_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#insert_statement.
PlSqlParserListener.prototype.enterInsert_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#insert_statement.
PlSqlParserListener.prototype.exitInsert_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#single_table_insert.
PlSqlParserListener.prototype.enterSingle_table_insert = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#single_table_insert.
PlSqlParserListener.prototype.exitSingle_table_insert = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multi_table_insert.
PlSqlParserListener.prototype.enterMulti_table_insert = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multi_table_insert.
PlSqlParserListener.prototype.exitMulti_table_insert = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multi_table_element.
PlSqlParserListener.prototype.enterMulti_table_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multi_table_element.
PlSqlParserListener.prototype.exitMulti_table_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#conditional_insert_clause.
PlSqlParserListener.prototype.enterConditional_insert_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#conditional_insert_clause.
PlSqlParserListener.prototype.exitConditional_insert_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#conditional_insert_when_part.
PlSqlParserListener.prototype.enterConditional_insert_when_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#conditional_insert_when_part.
PlSqlParserListener.prototype.exitConditional_insert_when_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#conditional_insert_else_part.
PlSqlParserListener.prototype.enterConditional_insert_else_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#conditional_insert_else_part.
PlSqlParserListener.prototype.exitConditional_insert_else_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#insert_into_clause.
PlSqlParserListener.prototype.enterInsert_into_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#insert_into_clause.
PlSqlParserListener.prototype.exitInsert_into_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#values_clause.
PlSqlParserListener.prototype.enterValues_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#values_clause.
PlSqlParserListener.prototype.exitValues_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_statement.
PlSqlParserListener.prototype.enterMerge_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_statement.
PlSqlParserListener.prototype.exitMerge_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_update_clause.
PlSqlParserListener.prototype.enterMerge_update_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_update_clause.
PlSqlParserListener.prototype.exitMerge_update_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_element.
PlSqlParserListener.prototype.enterMerge_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_element.
PlSqlParserListener.prototype.exitMerge_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_update_delete_part.
PlSqlParserListener.prototype.enterMerge_update_delete_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_update_delete_part.
PlSqlParserListener.prototype.exitMerge_update_delete_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_insert_clause.
PlSqlParserListener.prototype.enterMerge_insert_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_insert_clause.
PlSqlParserListener.prototype.exitMerge_insert_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#selected_tableview.
PlSqlParserListener.prototype.enterSelected_tableview = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#selected_tableview.
PlSqlParserListener.prototype.exitSelected_tableview = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lock_table_statement.
PlSqlParserListener.prototype.enterLock_table_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lock_table_statement.
PlSqlParserListener.prototype.exitLock_table_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#wait_nowait_part.
PlSqlParserListener.prototype.enterWait_nowait_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#wait_nowait_part.
PlSqlParserListener.prototype.exitWait_nowait_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lock_table_element.
PlSqlParserListener.prototype.enterLock_table_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lock_table_element.
PlSqlParserListener.prototype.exitLock_table_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lock_mode.
PlSqlParserListener.prototype.enterLock_mode = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lock_mode.
PlSqlParserListener.prototype.exitLock_mode = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_table_ref.
PlSqlParserListener.prototype.enterGeneral_table_ref = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_table_ref.
PlSqlParserListener.prototype.exitGeneral_table_ref = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#static_returning_clause.
PlSqlParserListener.prototype.enterStatic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#static_returning_clause.
PlSqlParserListener.prototype.exitStatic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#error_logging_clause.
PlSqlParserListener.prototype.enterError_logging_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#error_logging_clause.
PlSqlParserListener.prototype.exitError_logging_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#error_logging_into_part.
PlSqlParserListener.prototype.enterError_logging_into_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#error_logging_into_part.
PlSqlParserListener.prototype.exitError_logging_into_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#error_logging_reject_part.
PlSqlParserListener.prototype.enterError_logging_reject_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#error_logging_reject_part.
PlSqlParserListener.prototype.exitError_logging_reject_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_table_expression_clause.
PlSqlParserListener.prototype.enterDml_table_expression_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_table_expression_clause.
PlSqlParserListener.prototype.exitDml_table_expression_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_collection_expression.
PlSqlParserListener.prototype.enterTable_collection_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_collection_expression.
PlSqlParserListener.prototype.exitTable_collection_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_restriction_clause.
PlSqlParserListener.prototype.enterSubquery_restriction_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_restriction_clause.
PlSqlParserListener.prototype.exitSubquery_restriction_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sample_clause.
PlSqlParserListener.prototype.enterSample_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sample_clause.
PlSqlParserListener.prototype.exitSample_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#seed_part.
PlSqlParserListener.prototype.enterSeed_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#seed_part.
PlSqlParserListener.prototype.exitSeed_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#condition.
PlSqlParserListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#condition.
PlSqlParserListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_condition.
PlSqlParserListener.prototype.enterJson_condition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_condition.
PlSqlParserListener.prototype.exitJson_condition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#expressions.
PlSqlParserListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#expressions.
PlSqlParserListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#expression.
PlSqlParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#expression.
PlSqlParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_expression.
PlSqlParserListener.prototype.enterCursor_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_expression.
PlSqlParserListener.prototype.exitCursor_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logical_expression.
PlSqlParserListener.prototype.enterLogical_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logical_expression.
PlSqlParserListener.prototype.exitLogical_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unary_logical_expression.
PlSqlParserListener.prototype.enterUnary_logical_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unary_logical_expression.
PlSqlParserListener.prototype.exitUnary_logical_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logical_operation.
PlSqlParserListener.prototype.enterLogical_operation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logical_operation.
PlSqlParserListener.prototype.exitLogical_operation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multiset_expression.
PlSqlParserListener.prototype.enterMultiset_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multiset_expression.
PlSqlParserListener.prototype.exitMultiset_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_expression.
PlSqlParserListener.prototype.enterRelational_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_expression.
PlSqlParserListener.prototype.exitRelational_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compound_expression.
PlSqlParserListener.prototype.enterCompound_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compound_expression.
PlSqlParserListener.prototype.exitCompound_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_operator.
PlSqlParserListener.prototype.enterRelational_operator = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_operator.
PlSqlParserListener.prototype.exitRelational_operator = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#in_elements.
PlSqlParserListener.prototype.enterIn_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#in_elements.
PlSqlParserListener.prototype.exitIn_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#between_elements.
PlSqlParserListener.prototype.enterBetween_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#between_elements.
PlSqlParserListener.prototype.exitBetween_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#concatenation.
PlSqlParserListener.prototype.enterConcatenation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#concatenation.
PlSqlParserListener.prototype.exitConcatenation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#interval_expression.
PlSqlParserListener.prototype.enterInterval_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#interval_expression.
PlSqlParserListener.prototype.exitInterval_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_expression.
PlSqlParserListener.prototype.enterModel_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_expression.
PlSqlParserListener.prototype.exitModel_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_expression_element.
PlSqlParserListener.prototype.enterModel_expression_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_expression_element.
PlSqlParserListener.prototype.exitModel_expression_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#single_column_for_loop.
PlSqlParserListener.prototype.enterSingle_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#single_column_for_loop.
PlSqlParserListener.prototype.exitSingle_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multi_column_for_loop.
PlSqlParserListener.prototype.enterMulti_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multi_column_for_loop.
PlSqlParserListener.prototype.exitMulti_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unary_expression.
PlSqlParserListener.prototype.enterUnary_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unary_expression.
PlSqlParserListener.prototype.exitUnary_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#case_statement.
PlSqlParserListener.prototype.enterCase_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#case_statement.
PlSqlParserListener.prototype.exitCase_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#simple_case_statement.
PlSqlParserListener.prototype.enterSimple_case_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#simple_case_statement.
PlSqlParserListener.prototype.exitSimple_case_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#simple_case_when_part.
PlSqlParserListener.prototype.enterSimple_case_when_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#simple_case_when_part.
PlSqlParserListener.prototype.exitSimple_case_when_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#searched_case_statement.
PlSqlParserListener.prototype.enterSearched_case_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#searched_case_statement.
PlSqlParserListener.prototype.exitSearched_case_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#searched_case_when_part.
PlSqlParserListener.prototype.enterSearched_case_when_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#searched_case_when_part.
PlSqlParserListener.prototype.exitSearched_case_when_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#case_else_part.
PlSqlParserListener.prototype.enterCase_else_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#case_else_part.
PlSqlParserListener.prototype.exitCase_else_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#atom.
PlSqlParserListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#atom.
PlSqlParserListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quantified_expression.
PlSqlParserListener.prototype.enterQuantified_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quantified_expression.
PlSqlParserListener.prototype.exitQuantified_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#string_function.
PlSqlParserListener.prototype.enterString_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#string_function.
PlSqlParserListener.prototype.exitString_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#standard_function.
PlSqlParserListener.prototype.enterStandard_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#standard_function.
PlSqlParserListener.prototype.exitStandard_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_function.
PlSqlParserListener.prototype.enterJson_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_function.
PlSqlParserListener.prototype.exitJson_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_object_content.
PlSqlParserListener.prototype.enterJson_object_content = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_object_content.
PlSqlParserListener.prototype.exitJson_object_content = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_object_entry.
PlSqlParserListener.prototype.enterJson_object_entry = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_object_entry.
PlSqlParserListener.prototype.exitJson_object_entry = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_table_clause.
PlSqlParserListener.prototype.enterJson_table_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_table_clause.
PlSqlParserListener.prototype.exitJson_table_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_array_element.
PlSqlParserListener.prototype.enterJson_array_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_array_element.
PlSqlParserListener.prototype.exitJson_array_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_on_null_clause.
PlSqlParserListener.prototype.enterJson_on_null_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_on_null_clause.
PlSqlParserListener.prototype.exitJson_on_null_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_return_clause.
PlSqlParserListener.prototype.enterJson_return_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_return_clause.
PlSqlParserListener.prototype.exitJson_return_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_transform_op.
PlSqlParserListener.prototype.enterJson_transform_op = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_transform_op.
PlSqlParserListener.prototype.exitJson_transform_op = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_column_clause.
PlSqlParserListener.prototype.enterJson_column_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_column_clause.
PlSqlParserListener.prototype.exitJson_column_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_column_definition.
PlSqlParserListener.prototype.enterJson_column_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_column_definition.
PlSqlParserListener.prototype.exitJson_column_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_query_returning_clause.
PlSqlParserListener.prototype.enterJson_query_returning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_query_returning_clause.
PlSqlParserListener.prototype.exitJson_query_returning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_query_return_type.
PlSqlParserListener.prototype.enterJson_query_return_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_query_return_type.
PlSqlParserListener.prototype.exitJson_query_return_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_query_wrapper_clause.
PlSqlParserListener.prototype.enterJson_query_wrapper_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_query_wrapper_clause.
PlSqlParserListener.prototype.exitJson_query_wrapper_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_query_on_error_clause.
PlSqlParserListener.prototype.enterJson_query_on_error_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_query_on_error_clause.
PlSqlParserListener.prototype.exitJson_query_on_error_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_query_on_empty_clause.
PlSqlParserListener.prototype.enterJson_query_on_empty_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_query_on_empty_clause.
PlSqlParserListener.prototype.exitJson_query_on_empty_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_value_return_clause.
PlSqlParserListener.prototype.enterJson_value_return_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_value_return_clause.
PlSqlParserListener.prototype.exitJson_value_return_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_value_return_type.
PlSqlParserListener.prototype.enterJson_value_return_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_value_return_type.
PlSqlParserListener.prototype.exitJson_value_return_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#json_value_on_mismatch_clause.
PlSqlParserListener.prototype.enterJson_value_on_mismatch_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#json_value_on_mismatch_clause.
PlSqlParserListener.prototype.exitJson_value_on_mismatch_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#literal.
PlSqlParserListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#literal.
PlSqlParserListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_function_wrapper.
PlSqlParserListener.prototype.enterNumeric_function_wrapper = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_function_wrapper.
PlSqlParserListener.prototype.exitNumeric_function_wrapper = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_function.
PlSqlParserListener.prototype.enterNumeric_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_function.
PlSqlParserListener.prototype.exitNumeric_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#listagg_overflow_clause.
PlSqlParserListener.prototype.enterListagg_overflow_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#listagg_overflow_clause.
PlSqlParserListener.prototype.exitListagg_overflow_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#other_function.
PlSqlParserListener.prototype.enterOther_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#other_function.
PlSqlParserListener.prototype.exitOther_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#over_clause_keyword.
PlSqlParserListener.prototype.enterOver_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#over_clause_keyword.
PlSqlParserListener.prototype.exitOver_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#within_or_over_clause_keyword.
PlSqlParserListener.prototype.enterWithin_or_over_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#within_or_over_clause_keyword.
PlSqlParserListener.prototype.exitWithin_or_over_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#standard_prediction_function_keyword.
PlSqlParserListener.prototype.enterStandard_prediction_function_keyword = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#standard_prediction_function_keyword.
PlSqlParserListener.prototype.exitStandard_prediction_function_keyword = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#over_clause.
PlSqlParserListener.prototype.enterOver_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#over_clause.
PlSqlParserListener.prototype.exitOver_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#windowing_clause.
PlSqlParserListener.prototype.enterWindowing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#windowing_clause.
PlSqlParserListener.prototype.exitWindowing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#windowing_type.
PlSqlParserListener.prototype.enterWindowing_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#windowing_type.
PlSqlParserListener.prototype.exitWindowing_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#windowing_elements.
PlSqlParserListener.prototype.enterWindowing_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#windowing_elements.
PlSqlParserListener.prototype.exitWindowing_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_clause.
PlSqlParserListener.prototype.enterUsing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_clause.
PlSqlParserListener.prototype.exitUsing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_element.
PlSqlParserListener.prototype.enterUsing_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_element.
PlSqlParserListener.prototype.exitUsing_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#collect_order_by_part.
PlSqlParserListener.prototype.enterCollect_order_by_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#collect_order_by_part.
PlSqlParserListener.prototype.exitCollect_order_by_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#within_or_over_part.
PlSqlParserListener.prototype.enterWithin_or_over_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#within_or_over_part.
PlSqlParserListener.prototype.exitWithin_or_over_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cost_matrix_clause.
PlSqlParserListener.prototype.enterCost_matrix_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cost_matrix_clause.
PlSqlParserListener.prototype.exitCost_matrix_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_passing_clause.
PlSqlParserListener.prototype.enterXml_passing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_passing_clause.
PlSqlParserListener.prototype.exitXml_passing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_attributes_clause.
PlSqlParserListener.prototype.enterXml_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_attributes_clause.
PlSqlParserListener.prototype.exitXml_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_namespaces_clause.
PlSqlParserListener.prototype.enterXml_namespaces_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_namespaces_clause.
PlSqlParserListener.prototype.exitXml_namespaces_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_table_column.
PlSqlParserListener.prototype.enterXml_table_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_table_column.
PlSqlParserListener.prototype.exitXml_table_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_general_default_part.
PlSqlParserListener.prototype.enterXml_general_default_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_general_default_part.
PlSqlParserListener.prototype.exitXml_general_default_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_multiuse_expression_element.
PlSqlParserListener.prototype.enterXml_multiuse_expression_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_multiuse_expression_element.
PlSqlParserListener.prototype.exitXml_multiuse_expression_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlroot_param_version_part.
PlSqlParserListener.prototype.enterXmlroot_param_version_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlroot_param_version_part.
PlSqlParserListener.prototype.exitXmlroot_param_version_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlroot_param_standalone_part.
PlSqlParserListener.prototype.enterXmlroot_param_standalone_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlroot_param_standalone_part.
PlSqlParserListener.prototype.exitXmlroot_param_standalone_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlserialize_param_enconding_part.
PlSqlParserListener.prototype.enterXmlserialize_param_enconding_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlserialize_param_enconding_part.
PlSqlParserListener.prototype.exitXmlserialize_param_enconding_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlserialize_param_version_part.
PlSqlParserListener.prototype.enterXmlserialize_param_version_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlserialize_param_version_part.
PlSqlParserListener.prototype.exitXmlserialize_param_version_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlserialize_param_ident_part.
PlSqlParserListener.prototype.enterXmlserialize_param_ident_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlserialize_param_ident_part.
PlSqlParserListener.prototype.exitXmlserialize_param_ident_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_plus_command_no_semicolon.
PlSqlParserListener.prototype.enterSql_plus_command_no_semicolon = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_plus_command_no_semicolon.
PlSqlParserListener.prototype.exitSql_plus_command_no_semicolon = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_plus_command.
PlSqlParserListener.prototype.enterSql_plus_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_plus_command.
PlSqlParserListener.prototype.exitSql_plus_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#start_command.
PlSqlParserListener.prototype.enterStart_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#start_command.
PlSqlParserListener.prototype.exitStart_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#whenever_command.
PlSqlParserListener.prototype.enterWhenever_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#whenever_command.
PlSqlParserListener.prototype.exitWhenever_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_command.
PlSqlParserListener.prototype.enterSet_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_command.
PlSqlParserListener.prototype.exitSet_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#timing_command.
PlSqlParserListener.prototype.enterTiming_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#timing_command.
PlSqlParserListener.prototype.exitTiming_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_extension_clause.
PlSqlParserListener.prototype.enterPartition_extension_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_extension_clause.
PlSqlParserListener.prototype.exitPartition_extension_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_alias.
PlSqlParserListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_alias.
PlSqlParserListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_alias.
PlSqlParserListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_alias.
PlSqlParserListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#where_clause.
PlSqlParserListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#where_clause.
PlSqlParserListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quantitative_where_stmt.
PlSqlParserListener.prototype.enterQuantitative_where_stmt = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quantitative_where_stmt.
PlSqlParserListener.prototype.exitQuantitative_where_stmt = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#into_clause.
PlSqlParserListener.prototype.enterInto_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#into_clause.
PlSqlParserListener.prototype.exitInto_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_column_name.
PlSqlParserListener.prototype.enterXml_column_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_column_name.
PlSqlParserListener.prototype.exitXml_column_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cost_class_name.
PlSqlParserListener.prototype.enterCost_class_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cost_class_name.
PlSqlParserListener.prototype.exitCost_class_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#attribute_name.
PlSqlParserListener.prototype.enterAttribute_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#attribute_name.
PlSqlParserListener.prototype.exitAttribute_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#savepoint_name.
PlSqlParserListener.prototype.enterSavepoint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#savepoint_name.
PlSqlParserListener.prototype.exitSavepoint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollback_segment_name.
PlSqlParserListener.prototype.enterRollback_segment_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollback_segment_name.
PlSqlParserListener.prototype.exitRollback_segment_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_var_name.
PlSqlParserListener.prototype.enterTable_var_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_var_name.
PlSqlParserListener.prototype.exitTable_var_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#schema_name.
PlSqlParserListener.prototype.enterSchema_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#schema_name.
PlSqlParserListener.prototype.exitSchema_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#routine_name.
PlSqlParserListener.prototype.enterRoutine_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#routine_name.
PlSqlParserListener.prototype.exitRoutine_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#package_name.
PlSqlParserListener.prototype.enterPackage_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#package_name.
PlSqlParserListener.prototype.exitPackage_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#implementation_type_name.
PlSqlParserListener.prototype.enterImplementation_type_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#implementation_type_name.
PlSqlParserListener.prototype.exitImplementation_type_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter_name.
PlSqlParserListener.prototype.enterParameter_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter_name.
PlSqlParserListener.prototype.exitParameter_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_model_name.
PlSqlParserListener.prototype.enterReference_model_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_model_name.
PlSqlParserListener.prototype.exitReference_model_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#main_model_name.
PlSqlParserListener.prototype.enterMain_model_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#main_model_name.
PlSqlParserListener.prototype.exitMain_model_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#container_tableview_name.
PlSqlParserListener.prototype.enterContainer_tableview_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#container_tableview_name.
PlSqlParserListener.prototype.exitContainer_tableview_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#aggregate_function_name.
PlSqlParserListener.prototype.enterAggregate_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#aggregate_function_name.
PlSqlParserListener.prototype.exitAggregate_function_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#query_name.
PlSqlParserListener.prototype.enterQuery_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#query_name.
PlSqlParserListener.prototype.exitQuery_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grantee_name.
PlSqlParserListener.prototype.enterGrantee_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grantee_name.
PlSqlParserListener.prototype.exitGrantee_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#role_name.
PlSqlParserListener.prototype.enterRole_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#role_name.
PlSqlParserListener.prototype.exitRole_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constraint_name.
PlSqlParserListener.prototype.enterConstraint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constraint_name.
PlSqlParserListener.prototype.exitConstraint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#label_name.
PlSqlParserListener.prototype.enterLabel_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#label_name.
PlSqlParserListener.prototype.exitLabel_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_name.
PlSqlParserListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_name.
PlSqlParserListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sequence_name.
PlSqlParserListener.prototype.enterSequence_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sequence_name.
PlSqlParserListener.prototype.exitSequence_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exception_name.
PlSqlParserListener.prototype.enterException_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exception_name.
PlSqlParserListener.prototype.exitException_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_name.
PlSqlParserListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_name.
PlSqlParserListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_name.
PlSqlParserListener.prototype.enterProcedure_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_name.
PlSqlParserListener.prototype.exitProcedure_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_name.
PlSqlParserListener.prototype.enterTrigger_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_name.
PlSqlParserListener.prototype.exitTrigger_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#variable_name.
PlSqlParserListener.prototype.enterVariable_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#variable_name.
PlSqlParserListener.prototype.exitVariable_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_name.
PlSqlParserListener.prototype.enterIndex_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_name.
PlSqlParserListener.prototype.exitIndex_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_name.
PlSqlParserListener.prototype.enterCursor_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_name.
PlSqlParserListener.prototype.exitCursor_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#record_name.
PlSqlParserListener.prototype.enterRecord_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#record_name.
PlSqlParserListener.prototype.exitRecord_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#collection_name.
PlSqlParserListener.prototype.enterCollection_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#collection_name.
PlSqlParserListener.prototype.exitCollection_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#link_name.
PlSqlParserListener.prototype.enterLink_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#link_name.
PlSqlParserListener.prototype.exitLink_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_name.
PlSqlParserListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_name.
PlSqlParserListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tableview_name.
PlSqlParserListener.prototype.enterTableview_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tableview_name.
PlSqlParserListener.prototype.exitTableview_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmltable.
PlSqlParserListener.prototype.enterXmltable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmltable.
PlSqlParserListener.prototype.exitXmltable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#char_set_name.
PlSqlParserListener.prototype.enterChar_set_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#char_set_name.
PlSqlParserListener.prototype.exitChar_set_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#synonym_name.
PlSqlParserListener.prototype.enterSynonym_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#synonym_name.
PlSqlParserListener.prototype.exitSynonym_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#schema_object_name.
PlSqlParserListener.prototype.enterSchema_object_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#schema_object_name.
PlSqlParserListener.prototype.exitSchema_object_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dir_object_name.
PlSqlParserListener.prototype.enterDir_object_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dir_object_name.
PlSqlParserListener.prototype.exitDir_object_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#user_object_name.
PlSqlParserListener.prototype.enterUser_object_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#user_object_name.
PlSqlParserListener.prototype.exitUser_object_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grant_object_name.
PlSqlParserListener.prototype.enterGrant_object_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grant_object_name.
PlSqlParserListener.prototype.exitGrant_object_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_list.
PlSqlParserListener.prototype.enterColumn_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_list.
PlSqlParserListener.prototype.exitColumn_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#paren_column_list.
PlSqlParserListener.prototype.enterParen_column_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#paren_column_list.
PlSqlParserListener.prototype.exitParen_column_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#keep_clause.
PlSqlParserListener.prototype.enterKeep_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#keep_clause.
PlSqlParserListener.prototype.exitKeep_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_argument.
PlSqlParserListener.prototype.enterFunction_argument = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_argument.
PlSqlParserListener.prototype.exitFunction_argument = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_argument_analytic.
PlSqlParserListener.prototype.enterFunction_argument_analytic = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_argument_analytic.
PlSqlParserListener.prototype.exitFunction_argument_analytic = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_argument_modeling.
PlSqlParserListener.prototype.enterFunction_argument_modeling = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_argument_modeling.
PlSqlParserListener.prototype.exitFunction_argument_modeling = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#respect_or_ignore_nulls.
PlSqlParserListener.prototype.enterRespect_or_ignore_nulls = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#respect_or_ignore_nulls.
PlSqlParserListener.prototype.exitRespect_or_ignore_nulls = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#argument.
PlSqlParserListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#argument.
PlSqlParserListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_spec.
PlSqlParserListener.prototype.enterType_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_spec.
PlSqlParserListener.prototype.exitType_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datatype.
PlSqlParserListener.prototype.enterDatatype = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datatype.
PlSqlParserListener.prototype.exitDatatype = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#precision_part.
PlSqlParserListener.prototype.enterPrecision_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#precision_part.
PlSqlParserListener.prototype.exitPrecision_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#native_datatype_element.
PlSqlParserListener.prototype.enterNative_datatype_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#native_datatype_element.
PlSqlParserListener.prototype.exitNative_datatype_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#bind_variable.
PlSqlParserListener.prototype.enterBind_variable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#bind_variable.
PlSqlParserListener.prototype.exitBind_variable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_element.
PlSqlParserListener.prototype.enterGeneral_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_element.
PlSqlParserListener.prototype.exitGeneral_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_element_part.
PlSqlParserListener.prototype.enterGeneral_element_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_element_part.
PlSqlParserListener.prototype.exitGeneral_element_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_element.
PlSqlParserListener.prototype.enterTable_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_element.
PlSqlParserListener.prototype.exitTable_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_privilege.
PlSqlParserListener.prototype.enterObject_privilege = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_privilege.
PlSqlParserListener.prototype.exitObject_privilege = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#system_privilege.
PlSqlParserListener.prototype.enterSystem_privilege = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#system_privilege.
PlSqlParserListener.prototype.exitSystem_privilege = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constant.
PlSqlParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constant.
PlSqlParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric.
PlSqlParserListener.prototype.enterNumeric = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric.
PlSqlParserListener.prototype.exitNumeric = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_negative.
PlSqlParserListener.prototype.enterNumeric_negative = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_negative.
PlSqlParserListener.prototype.exitNumeric_negative = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quoted_string.
PlSqlParserListener.prototype.enterQuoted_string = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quoted_string.
PlSqlParserListener.prototype.exitQuoted_string = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identifier.
PlSqlParserListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identifier.
PlSqlParserListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#id_expression.
PlSqlParserListener.prototype.enterId_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#id_expression.
PlSqlParserListener.prototype.exitId_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#outer_join_sign.
PlSqlParserListener.prototype.enterOuter_join_sign = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#outer_join_sign.
PlSqlParserListener.prototype.exitOuter_join_sign = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#regular_id.
PlSqlParserListener.prototype.enterRegular_id = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#regular_id.
PlSqlParserListener.prototype.exitRegular_id = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_reserved_keywords_in_12c.
PlSqlParserListener.prototype.enterNon_reserved_keywords_in_12c = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_reserved_keywords_in_12c.
PlSqlParserListener.prototype.exitNon_reserved_keywords_in_12c = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_reserved_keywords_pre12c.
PlSqlParserListener.prototype.enterNon_reserved_keywords_pre12c = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_reserved_keywords_pre12c.
PlSqlParserListener.prototype.exitNon_reserved_keywords_pre12c = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#string_function_name.
PlSqlParserListener.prototype.enterString_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#string_function_name.
PlSqlParserListener.prototype.exitString_function_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_function_name.
PlSqlParserListener.prototype.enterNumeric_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_function_name.
PlSqlParserListener.prototype.exitNumeric_function_name = function(ctx) {
};



exports.PlSqlParserListener = PlSqlParserListener;