import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LessonHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$LessonHistoryPayload>;
export type AggregateLessonHistory = {
    _count: LessonHistoryCountAggregateOutputType | null;
    _avg: LessonHistoryAvgAggregateOutputType | null;
    _sum: LessonHistorySumAggregateOutputType | null;
    _min: LessonHistoryMinAggregateOutputType | null;
    _max: LessonHistoryMaxAggregateOutputType | null;
};
export type LessonHistoryAvgAggregateOutputType = {
    star: number | null;
};
export type LessonHistorySumAggregateOutputType = {
    star: number | null;
};
export type LessonHistoryMinAggregateOutputType = {
    id: string | null;
    lessonId: string | null;
    star: number | null;
    feedback: string | null;
    teacherId: string | null;
    studentId: string | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonHistoryMaxAggregateOutputType = {
    id: string | null;
    lessonId: string | null;
    star: number | null;
    feedback: string | null;
    teacherId: string | null;
    studentId: string | null;
    isDeleted: boolean | null;
    deletedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LessonHistoryCountAggregateOutputType = {
    id: number;
    lessonId: number;
    star: number;
    feedback: number;
    teacherId: number;
    studentId: number;
    isDeleted: number;
    deletedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LessonHistoryAvgAggregateInputType = {
    star?: true;
};
export type LessonHistorySumAggregateInputType = {
    star?: true;
};
export type LessonHistoryMinAggregateInputType = {
    id?: true;
    lessonId?: true;
    star?: true;
    feedback?: true;
    teacherId?: true;
    studentId?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonHistoryMaxAggregateInputType = {
    id?: true;
    lessonId?: true;
    star?: true;
    feedback?: true;
    teacherId?: true;
    studentId?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LessonHistoryCountAggregateInputType = {
    id?: true;
    lessonId?: true;
    star?: true;
    feedback?: true;
    teacherId?: true;
    studentId?: true;
    isDeleted?: true;
    deletedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LessonHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonHistoryWhereInput;
    orderBy?: Prisma.LessonHistoryOrderByWithRelationInput | Prisma.LessonHistoryOrderByWithRelationInput[];
    cursor?: Prisma.LessonHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LessonHistoryCountAggregateInputType;
    _avg?: LessonHistoryAvgAggregateInputType;
    _sum?: LessonHistorySumAggregateInputType;
    _min?: LessonHistoryMinAggregateInputType;
    _max?: LessonHistoryMaxAggregateInputType;
};
export type GetLessonHistoryAggregateType<T extends LessonHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregateLessonHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLessonHistory[P]> : Prisma.GetScalarType<T[P], AggregateLessonHistory[P]>;
};
export type LessonHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonHistoryWhereInput;
    orderBy?: Prisma.LessonHistoryOrderByWithAggregationInput | Prisma.LessonHistoryOrderByWithAggregationInput[];
    by: Prisma.LessonHistoryScalarFieldEnum[] | Prisma.LessonHistoryScalarFieldEnum;
    having?: Prisma.LessonHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LessonHistoryCountAggregateInputType | true;
    _avg?: LessonHistoryAvgAggregateInputType;
    _sum?: LessonHistorySumAggregateInputType;
    _min?: LessonHistoryMinAggregateInputType;
    _max?: LessonHistoryMaxAggregateInputType;
};
export type LessonHistoryGroupByOutputType = {
    id: string;
    lessonId: string;
    star: number;
    feedback: string | null;
    teacherId: string;
    studentId: string;
    isDeleted: boolean;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LessonHistoryCountAggregateOutputType | null;
    _avg: LessonHistoryAvgAggregateOutputType | null;
    _sum: LessonHistorySumAggregateOutputType | null;
    _min: LessonHistoryMinAggregateOutputType | null;
    _max: LessonHistoryMaxAggregateOutputType | null;
};
type GetLessonHistoryGroupByPayload<T extends LessonHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LessonHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LessonHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LessonHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LessonHistoryGroupByOutputType[P]>;
}>>;
export type LessonHistoryWhereInput = {
    AND?: Prisma.LessonHistoryWhereInput | Prisma.LessonHistoryWhereInput[];
    OR?: Prisma.LessonHistoryWhereInput[];
    NOT?: Prisma.LessonHistoryWhereInput | Prisma.LessonHistoryWhereInput[];
    id?: Prisma.StringFilter<"LessonHistory"> | string;
    lessonId?: Prisma.StringFilter<"LessonHistory"> | string;
    star?: Prisma.IntFilter<"LessonHistory"> | number;
    feedback?: Prisma.StringNullableFilter<"LessonHistory"> | string | null;
    teacherId?: Prisma.StringFilter<"LessonHistory"> | string;
    studentId?: Prisma.StringFilter<"LessonHistory"> | string;
    isDeleted?: Prisma.BoolFilter<"LessonHistory"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"LessonHistory"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonHistory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LessonHistory"> | Date | string;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
};
export type LessonHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    star?: Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lesson?: Prisma.LessonOrderByWithRelationInput;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    student?: Prisma.StudentOrderByWithRelationInput;
};
export type LessonHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LessonHistoryWhereInput | Prisma.LessonHistoryWhereInput[];
    OR?: Prisma.LessonHistoryWhereInput[];
    NOT?: Prisma.LessonHistoryWhereInput | Prisma.LessonHistoryWhereInput[];
    lessonId?: Prisma.StringFilter<"LessonHistory"> | string;
    star?: Prisma.IntFilter<"LessonHistory"> | number;
    feedback?: Prisma.StringNullableFilter<"LessonHistory"> | string | null;
    teacherId?: Prisma.StringFilter<"LessonHistory"> | string;
    studentId?: Prisma.StringFilter<"LessonHistory"> | string;
    isDeleted?: Prisma.BoolFilter<"LessonHistory"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"LessonHistory"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonHistory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LessonHistory"> | Date | string;
    lesson?: Prisma.XOR<Prisma.LessonScalarRelationFilter, Prisma.LessonWhereInput>;
    teacher?: Prisma.XOR<Prisma.TeacherScalarRelationFilter, Prisma.TeacherWhereInput>;
    student?: Prisma.XOR<Prisma.StudentScalarRelationFilter, Prisma.StudentWhereInput>;
}, "id">;
export type LessonHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    star?: Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LessonHistoryCountOrderByAggregateInput;
    _avg?: Prisma.LessonHistoryAvgOrderByAggregateInput;
    _max?: Prisma.LessonHistoryMaxOrderByAggregateInput;
    _min?: Prisma.LessonHistoryMinOrderByAggregateInput;
    _sum?: Prisma.LessonHistorySumOrderByAggregateInput;
};
export type LessonHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.LessonHistoryScalarWhereWithAggregatesInput | Prisma.LessonHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.LessonHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LessonHistoryScalarWhereWithAggregatesInput | Prisma.LessonHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LessonHistory"> | string;
    lessonId?: Prisma.StringWithAggregatesFilter<"LessonHistory"> | string;
    star?: Prisma.IntWithAggregatesFilter<"LessonHistory"> | number;
    feedback?: Prisma.StringNullableWithAggregatesFilter<"LessonHistory"> | string | null;
    teacherId?: Prisma.StringWithAggregatesFilter<"LessonHistory"> | string;
    studentId?: Prisma.StringWithAggregatesFilter<"LessonHistory"> | string;
    isDeleted?: Prisma.BoolWithAggregatesFilter<"LessonHistory"> | boolean;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LessonHistory"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LessonHistory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LessonHistory"> | Date | string;
};
export type LessonHistoryCreateInput = {
    id?: string;
    star: number;
    feedback?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutLessonHistoriesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutLessonHistoriesInput;
    student: Prisma.StudentCreateNestedOneWithoutLessonHistoriesInput;
};
export type LessonHistoryUncheckedCreateInput = {
    id?: string;
    lessonId: string;
    star: number;
    feedback?: string | null;
    teacherId: string;
    studentId: string;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutLessonHistoriesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutLessonHistoriesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutLessonHistoriesNestedInput;
};
export type LessonHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonHistoryCreateManyInput = {
    id?: string;
    lessonId: string;
    star: number;
    feedback?: string | null;
    teacherId: string;
    studentId: string;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonHistoryListRelationFilter = {
    every?: Prisma.LessonHistoryWhereInput;
    some?: Prisma.LessonHistoryWhereInput;
    none?: Prisma.LessonHistoryWhereInput;
};
export type LessonHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LessonHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    star?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonHistoryAvgOrderByAggregateInput = {
    star?: Prisma.SortOrder;
};
export type LessonHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    star?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    lessonId?: Prisma.SortOrder;
    star?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    studentId?: Prisma.SortOrder;
    isDeleted?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LessonHistorySumOrderByAggregateInput = {
    star?: Prisma.SortOrder;
};
export type LessonHistoryCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutTeacherInput, Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput> | Prisma.LessonHistoryCreateWithoutTeacherInput[] | Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutTeacherInput | Prisma.LessonHistoryCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LessonHistoryCreateManyTeacherInputEnvelope;
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
};
export type LessonHistoryUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutTeacherInput, Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput> | Prisma.LessonHistoryCreateWithoutTeacherInput[] | Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutTeacherInput | Prisma.LessonHistoryCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.LessonHistoryCreateManyTeacherInputEnvelope;
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
};
export type LessonHistoryUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutTeacherInput, Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput> | Prisma.LessonHistoryCreateWithoutTeacherInput[] | Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutTeacherInput | Prisma.LessonHistoryCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LessonHistoryUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LessonHistoryUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LessonHistoryCreateManyTeacherInputEnvelope;
    set?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    disconnect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    delete?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    update?: Prisma.LessonHistoryUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LessonHistoryUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LessonHistoryUpdateManyWithWhereWithoutTeacherInput | Prisma.LessonHistoryUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LessonHistoryScalarWhereInput | Prisma.LessonHistoryScalarWhereInput[];
};
export type LessonHistoryUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutTeacherInput, Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput> | Prisma.LessonHistoryCreateWithoutTeacherInput[] | Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutTeacherInput | Prisma.LessonHistoryCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.LessonHistoryUpsertWithWhereUniqueWithoutTeacherInput | Prisma.LessonHistoryUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.LessonHistoryCreateManyTeacherInputEnvelope;
    set?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    disconnect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    delete?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    update?: Prisma.LessonHistoryUpdateWithWhereUniqueWithoutTeacherInput | Prisma.LessonHistoryUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.LessonHistoryUpdateManyWithWhereWithoutTeacherInput | Prisma.LessonHistoryUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.LessonHistoryScalarWhereInput | Prisma.LessonHistoryScalarWhereInput[];
};
export type LessonHistoryCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutStudentInput, Prisma.LessonHistoryUncheckedCreateWithoutStudentInput> | Prisma.LessonHistoryCreateWithoutStudentInput[] | Prisma.LessonHistoryUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutStudentInput | Prisma.LessonHistoryCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.LessonHistoryCreateManyStudentInputEnvelope;
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
};
export type LessonHistoryUncheckedCreateNestedManyWithoutStudentInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutStudentInput, Prisma.LessonHistoryUncheckedCreateWithoutStudentInput> | Prisma.LessonHistoryCreateWithoutStudentInput[] | Prisma.LessonHistoryUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutStudentInput | Prisma.LessonHistoryCreateOrConnectWithoutStudentInput[];
    createMany?: Prisma.LessonHistoryCreateManyStudentInputEnvelope;
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
};
export type LessonHistoryUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutStudentInput, Prisma.LessonHistoryUncheckedCreateWithoutStudentInput> | Prisma.LessonHistoryCreateWithoutStudentInput[] | Prisma.LessonHistoryUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutStudentInput | Prisma.LessonHistoryCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.LessonHistoryUpsertWithWhereUniqueWithoutStudentInput | Prisma.LessonHistoryUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.LessonHistoryCreateManyStudentInputEnvelope;
    set?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    disconnect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    delete?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    update?: Prisma.LessonHistoryUpdateWithWhereUniqueWithoutStudentInput | Prisma.LessonHistoryUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.LessonHistoryUpdateManyWithWhereWithoutStudentInput | Prisma.LessonHistoryUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.LessonHistoryScalarWhereInput | Prisma.LessonHistoryScalarWhereInput[];
};
export type LessonHistoryUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutStudentInput, Prisma.LessonHistoryUncheckedCreateWithoutStudentInput> | Prisma.LessonHistoryCreateWithoutStudentInput[] | Prisma.LessonHistoryUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutStudentInput | Prisma.LessonHistoryCreateOrConnectWithoutStudentInput[];
    upsert?: Prisma.LessonHistoryUpsertWithWhereUniqueWithoutStudentInput | Prisma.LessonHistoryUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: Prisma.LessonHistoryCreateManyStudentInputEnvelope;
    set?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    disconnect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    delete?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    update?: Prisma.LessonHistoryUpdateWithWhereUniqueWithoutStudentInput | Prisma.LessonHistoryUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: Prisma.LessonHistoryUpdateManyWithWhereWithoutStudentInput | Prisma.LessonHistoryUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: Prisma.LessonHistoryScalarWhereInput | Prisma.LessonHistoryScalarWhereInput[];
};
export type LessonHistoryCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutLessonInput, Prisma.LessonHistoryUncheckedCreateWithoutLessonInput> | Prisma.LessonHistoryCreateWithoutLessonInput[] | Prisma.LessonHistoryUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutLessonInput | Prisma.LessonHistoryCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonHistoryCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
};
export type LessonHistoryUncheckedCreateNestedManyWithoutLessonInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutLessonInput, Prisma.LessonHistoryUncheckedCreateWithoutLessonInput> | Prisma.LessonHistoryCreateWithoutLessonInput[] | Prisma.LessonHistoryUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutLessonInput | Prisma.LessonHistoryCreateOrConnectWithoutLessonInput[];
    createMany?: Prisma.LessonHistoryCreateManyLessonInputEnvelope;
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
};
export type LessonHistoryUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutLessonInput, Prisma.LessonHistoryUncheckedCreateWithoutLessonInput> | Prisma.LessonHistoryCreateWithoutLessonInput[] | Prisma.LessonHistoryUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutLessonInput | Prisma.LessonHistoryCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonHistoryUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonHistoryUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonHistoryCreateManyLessonInputEnvelope;
    set?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    disconnect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    delete?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    update?: Prisma.LessonHistoryUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonHistoryUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonHistoryUpdateManyWithWhereWithoutLessonInput | Prisma.LessonHistoryUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonHistoryScalarWhereInput | Prisma.LessonHistoryScalarWhereInput[];
};
export type LessonHistoryUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: Prisma.XOR<Prisma.LessonHistoryCreateWithoutLessonInput, Prisma.LessonHistoryUncheckedCreateWithoutLessonInput> | Prisma.LessonHistoryCreateWithoutLessonInput[] | Prisma.LessonHistoryUncheckedCreateWithoutLessonInput[];
    connectOrCreate?: Prisma.LessonHistoryCreateOrConnectWithoutLessonInput | Prisma.LessonHistoryCreateOrConnectWithoutLessonInput[];
    upsert?: Prisma.LessonHistoryUpsertWithWhereUniqueWithoutLessonInput | Prisma.LessonHistoryUpsertWithWhereUniqueWithoutLessonInput[];
    createMany?: Prisma.LessonHistoryCreateManyLessonInputEnvelope;
    set?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    disconnect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    delete?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    connect?: Prisma.LessonHistoryWhereUniqueInput | Prisma.LessonHistoryWhereUniqueInput[];
    update?: Prisma.LessonHistoryUpdateWithWhereUniqueWithoutLessonInput | Prisma.LessonHistoryUpdateWithWhereUniqueWithoutLessonInput[];
    updateMany?: Prisma.LessonHistoryUpdateManyWithWhereWithoutLessonInput | Prisma.LessonHistoryUpdateManyWithWhereWithoutLessonInput[];
    deleteMany?: Prisma.LessonHistoryScalarWhereInput | Prisma.LessonHistoryScalarWhereInput[];
};
export type LessonHistoryCreateWithoutTeacherInput = {
    id?: string;
    star: number;
    feedback?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutLessonHistoriesInput;
    student: Prisma.StudentCreateNestedOneWithoutLessonHistoriesInput;
};
export type LessonHistoryUncheckedCreateWithoutTeacherInput = {
    id?: string;
    lessonId: string;
    star: number;
    feedback?: string | null;
    studentId: string;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonHistoryCreateOrConnectWithoutTeacherInput = {
    where: Prisma.LessonHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonHistoryCreateWithoutTeacherInput, Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput>;
};
export type LessonHistoryCreateManyTeacherInputEnvelope = {
    data: Prisma.LessonHistoryCreateManyTeacherInput | Prisma.LessonHistoryCreateManyTeacherInput[];
    skipDuplicates?: boolean;
};
export type LessonHistoryUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LessonHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonHistoryUpdateWithoutTeacherInput, Prisma.LessonHistoryUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.LessonHistoryCreateWithoutTeacherInput, Prisma.LessonHistoryUncheckedCreateWithoutTeacherInput>;
};
export type LessonHistoryUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.LessonHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonHistoryUpdateWithoutTeacherInput, Prisma.LessonHistoryUncheckedUpdateWithoutTeacherInput>;
};
export type LessonHistoryUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.LessonHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonHistoryUpdateManyMutationInput, Prisma.LessonHistoryUncheckedUpdateManyWithoutTeacherInput>;
};
export type LessonHistoryScalarWhereInput = {
    AND?: Prisma.LessonHistoryScalarWhereInput | Prisma.LessonHistoryScalarWhereInput[];
    OR?: Prisma.LessonHistoryScalarWhereInput[];
    NOT?: Prisma.LessonHistoryScalarWhereInput | Prisma.LessonHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"LessonHistory"> | string;
    lessonId?: Prisma.StringFilter<"LessonHistory"> | string;
    star?: Prisma.IntFilter<"LessonHistory"> | number;
    feedback?: Prisma.StringNullableFilter<"LessonHistory"> | string | null;
    teacherId?: Prisma.StringFilter<"LessonHistory"> | string;
    studentId?: Prisma.StringFilter<"LessonHistory"> | string;
    isDeleted?: Prisma.BoolFilter<"LessonHistory"> | boolean;
    deletedAt?: Prisma.DateTimeNullableFilter<"LessonHistory"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"LessonHistory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LessonHistory"> | Date | string;
};
export type LessonHistoryCreateWithoutStudentInput = {
    id?: string;
    star: number;
    feedback?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lesson: Prisma.LessonCreateNestedOneWithoutLessonHistoriesInput;
    teacher: Prisma.TeacherCreateNestedOneWithoutLessonHistoriesInput;
};
export type LessonHistoryUncheckedCreateWithoutStudentInput = {
    id?: string;
    lessonId: string;
    star: number;
    feedback?: string | null;
    teacherId: string;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonHistoryCreateOrConnectWithoutStudentInput = {
    where: Prisma.LessonHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonHistoryCreateWithoutStudentInput, Prisma.LessonHistoryUncheckedCreateWithoutStudentInput>;
};
export type LessonHistoryCreateManyStudentInputEnvelope = {
    data: Prisma.LessonHistoryCreateManyStudentInput | Prisma.LessonHistoryCreateManyStudentInput[];
    skipDuplicates?: boolean;
};
export type LessonHistoryUpsertWithWhereUniqueWithoutStudentInput = {
    where: Prisma.LessonHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonHistoryUpdateWithoutStudentInput, Prisma.LessonHistoryUncheckedUpdateWithoutStudentInput>;
    create: Prisma.XOR<Prisma.LessonHistoryCreateWithoutStudentInput, Prisma.LessonHistoryUncheckedCreateWithoutStudentInput>;
};
export type LessonHistoryUpdateWithWhereUniqueWithoutStudentInput = {
    where: Prisma.LessonHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonHistoryUpdateWithoutStudentInput, Prisma.LessonHistoryUncheckedUpdateWithoutStudentInput>;
};
export type LessonHistoryUpdateManyWithWhereWithoutStudentInput = {
    where: Prisma.LessonHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonHistoryUpdateManyMutationInput, Prisma.LessonHistoryUncheckedUpdateManyWithoutStudentInput>;
};
export type LessonHistoryCreateWithoutLessonInput = {
    id?: string;
    star: number;
    feedback?: string | null;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher: Prisma.TeacherCreateNestedOneWithoutLessonHistoriesInput;
    student: Prisma.StudentCreateNestedOneWithoutLessonHistoriesInput;
};
export type LessonHistoryUncheckedCreateWithoutLessonInput = {
    id?: string;
    star: number;
    feedback?: string | null;
    teacherId: string;
    studentId: string;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonHistoryCreateOrConnectWithoutLessonInput = {
    where: Prisma.LessonHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonHistoryCreateWithoutLessonInput, Prisma.LessonHistoryUncheckedCreateWithoutLessonInput>;
};
export type LessonHistoryCreateManyLessonInputEnvelope = {
    data: Prisma.LessonHistoryCreateManyLessonInput | Prisma.LessonHistoryCreateManyLessonInput[];
    skipDuplicates?: boolean;
};
export type LessonHistoryUpsertWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.LessonHistoryUpdateWithoutLessonInput, Prisma.LessonHistoryUncheckedUpdateWithoutLessonInput>;
    create: Prisma.XOR<Prisma.LessonHistoryCreateWithoutLessonInput, Prisma.LessonHistoryUncheckedCreateWithoutLessonInput>;
};
export type LessonHistoryUpdateWithWhereUniqueWithoutLessonInput = {
    where: Prisma.LessonHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.LessonHistoryUpdateWithoutLessonInput, Prisma.LessonHistoryUncheckedUpdateWithoutLessonInput>;
};
export type LessonHistoryUpdateManyWithWhereWithoutLessonInput = {
    where: Prisma.LessonHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.LessonHistoryUpdateManyMutationInput, Prisma.LessonHistoryUncheckedUpdateManyWithoutLessonInput>;
};
export type LessonHistoryCreateManyTeacherInput = {
    id?: string;
    lessonId: string;
    star: number;
    feedback?: string | null;
    studentId: string;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonHistoryUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutLessonHistoriesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutLessonHistoriesNestedInput;
};
export type LessonHistoryUncheckedUpdateWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonHistoryUncheckedUpdateManyWithoutTeacherInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonHistoryCreateManyStudentInput = {
    id?: string;
    lessonId: string;
    star: number;
    feedback?: string | null;
    teacherId: string;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonHistoryUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lesson?: Prisma.LessonUpdateOneRequiredWithoutLessonHistoriesNestedInput;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutLessonHistoriesNestedInput;
};
export type LessonHistoryUncheckedUpdateWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonHistoryUncheckedUpdateManyWithoutStudentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    lessonId?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonHistoryCreateManyLessonInput = {
    id?: string;
    star: number;
    feedback?: string | null;
    teacherId: string;
    studentId: string;
    isDeleted?: boolean;
    deletedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LessonHistoryUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneRequiredWithoutLessonHistoriesNestedInput;
    student?: Prisma.StudentUpdateOneRequiredWithoutLessonHistoriesNestedInput;
};
export type LessonHistoryUncheckedUpdateWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonHistoryUncheckedUpdateManyWithoutLessonInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    star?: Prisma.IntFieldUpdateOperationsInput | number;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    teacherId?: Prisma.StringFieldUpdateOperationsInput | string;
    studentId?: Prisma.StringFieldUpdateOperationsInput | string;
    isDeleted?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LessonHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    star?: boolean;
    feedback?: boolean;
    teacherId?: boolean;
    studentId?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonHistory"]>;
export type LessonHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    star?: boolean;
    feedback?: boolean;
    teacherId?: boolean;
    studentId?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonHistory"]>;
export type LessonHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    lessonId?: boolean;
    star?: boolean;
    feedback?: boolean;
    teacherId?: boolean;
    studentId?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lessonHistory"]>;
export type LessonHistorySelectScalar = {
    id?: boolean;
    lessonId?: boolean;
    star?: boolean;
    feedback?: boolean;
    teacherId?: boolean;
    studentId?: boolean;
    isDeleted?: boolean;
    deletedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LessonHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "lessonId" | "star" | "feedback" | "teacherId" | "studentId" | "isDeleted" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["lessonHistory"]>;
export type LessonHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type LessonHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type LessonHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lesson?: boolean | Prisma.LessonDefaultArgs<ExtArgs>;
    teacher?: boolean | Prisma.TeacherDefaultArgs<ExtArgs>;
    student?: boolean | Prisma.StudentDefaultArgs<ExtArgs>;
};
export type $LessonHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LessonHistory";
    objects: {
        lesson: Prisma.$LessonPayload<ExtArgs>;
        teacher: Prisma.$TeacherPayload<ExtArgs>;
        student: Prisma.$StudentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        lessonId: string;
        star: number;
        feedback: string | null;
        teacherId: string;
        studentId: string;
        isDeleted: boolean;
        deletedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lessonHistory"]>;
    composites: {};
};
export type LessonHistoryGetPayload<S extends boolean | null | undefined | LessonHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload, S>;
export type LessonHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LessonHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LessonHistoryCountAggregateInputType | true;
};
export interface LessonHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LessonHistory'];
        meta: {
            name: 'LessonHistory';
        };
    };
    findUnique<T extends LessonHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, LessonHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LessonHistoryClient<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LessonHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LessonHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonHistoryClient<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LessonHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, LessonHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__LessonHistoryClient<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LessonHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LessonHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LessonHistoryClient<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LessonHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, LessonHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LessonHistoryCreateArgs>(args: Prisma.SelectSubset<T, LessonHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__LessonHistoryClient<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LessonHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, LessonHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LessonHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LessonHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LessonHistoryDeleteArgs>(args: Prisma.SelectSubset<T, LessonHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__LessonHistoryClient<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LessonHistoryUpdateArgs>(args: Prisma.SelectSubset<T, LessonHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__LessonHistoryClient<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LessonHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, LessonHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LessonHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, LessonHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LessonHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LessonHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LessonHistoryUpsertArgs>(args: Prisma.SelectSubset<T, LessonHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__LessonHistoryClient<runtime.Types.Result.GetResult<Prisma.$LessonHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LessonHistoryCountArgs>(args?: Prisma.Subset<T, LessonHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LessonHistoryCountAggregateOutputType> : number>;
    aggregate<T extends LessonHistoryAggregateArgs>(args: Prisma.Subset<T, LessonHistoryAggregateArgs>): Prisma.PrismaPromise<GetLessonHistoryAggregateType<T>>;
    groupBy<T extends LessonHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LessonHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: LessonHistoryGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LessonHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LessonHistoryFieldRefs;
}
export interface Prisma__LessonHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lesson<T extends Prisma.LessonDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LessonDefaultArgs<ExtArgs>>): Prisma.Prisma__LessonClient<runtime.Types.Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    teacher<T extends Prisma.TeacherDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TeacherDefaultArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    student<T extends Prisma.StudentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StudentDefaultArgs<ExtArgs>>): Prisma.Prisma__StudentClient<runtime.Types.Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LessonHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"LessonHistory", 'String'>;
    readonly lessonId: Prisma.FieldRef<"LessonHistory", 'String'>;
    readonly star: Prisma.FieldRef<"LessonHistory", 'Int'>;
    readonly feedback: Prisma.FieldRef<"LessonHistory", 'String'>;
    readonly teacherId: Prisma.FieldRef<"LessonHistory", 'String'>;
    readonly studentId: Prisma.FieldRef<"LessonHistory", 'String'>;
    readonly isDeleted: Prisma.FieldRef<"LessonHistory", 'Boolean'>;
    readonly deletedAt: Prisma.FieldRef<"LessonHistory", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"LessonHistory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LessonHistory", 'DateTime'>;
}
export type LessonHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
    where: Prisma.LessonHistoryWhereUniqueInput;
};
export type LessonHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
    where: Prisma.LessonHistoryWhereUniqueInput;
};
export type LessonHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
    where?: Prisma.LessonHistoryWhereInput;
    orderBy?: Prisma.LessonHistoryOrderByWithRelationInput | Prisma.LessonHistoryOrderByWithRelationInput[];
    cursor?: Prisma.LessonHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonHistoryScalarFieldEnum | Prisma.LessonHistoryScalarFieldEnum[];
};
export type LessonHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
    where?: Prisma.LessonHistoryWhereInput;
    orderBy?: Prisma.LessonHistoryOrderByWithRelationInput | Prisma.LessonHistoryOrderByWithRelationInput[];
    cursor?: Prisma.LessonHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonHistoryScalarFieldEnum | Prisma.LessonHistoryScalarFieldEnum[];
};
export type LessonHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
    where?: Prisma.LessonHistoryWhereInput;
    orderBy?: Prisma.LessonHistoryOrderByWithRelationInput | Prisma.LessonHistoryOrderByWithRelationInput[];
    cursor?: Prisma.LessonHistoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LessonHistoryScalarFieldEnum | Prisma.LessonHistoryScalarFieldEnum[];
};
export type LessonHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonHistoryCreateInput, Prisma.LessonHistoryUncheckedCreateInput>;
};
export type LessonHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LessonHistoryCreateManyInput | Prisma.LessonHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LessonHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    data: Prisma.LessonHistoryCreateManyInput | Prisma.LessonHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LessonHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LessonHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonHistoryUpdateInput, Prisma.LessonHistoryUncheckedUpdateInput>;
    where: Prisma.LessonHistoryWhereUniqueInput;
};
export type LessonHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LessonHistoryUpdateManyMutationInput, Prisma.LessonHistoryUncheckedUpdateManyInput>;
    where?: Prisma.LessonHistoryWhereInput;
    limit?: number;
};
export type LessonHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LessonHistoryUpdateManyMutationInput, Prisma.LessonHistoryUncheckedUpdateManyInput>;
    where?: Prisma.LessonHistoryWhereInput;
    limit?: number;
    include?: Prisma.LessonHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LessonHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
    where: Prisma.LessonHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.LessonHistoryCreateInput, Prisma.LessonHistoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LessonHistoryUpdateInput, Prisma.LessonHistoryUncheckedUpdateInput>;
};
export type LessonHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
    where: Prisma.LessonHistoryWhereUniqueInput;
};
export type LessonHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LessonHistoryWhereInput;
    limit?: number;
};
export type LessonHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LessonHistorySelect<ExtArgs> | null;
    omit?: Prisma.LessonHistoryOmit<ExtArgs> | null;
    include?: Prisma.LessonHistoryInclude<ExtArgs> | null;
};
export {};
